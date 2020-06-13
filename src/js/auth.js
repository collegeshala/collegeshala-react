/* eslint-disable eqeqeq */
import AWS, { Config } from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import config from "./config";

window.user = {};

Config.region = config.cognito.region;
AWS.config.region = config.cognito.region;

const poolData = {
  UserPoolId: config.cognito.userPoolId,
  ClientId: config.cognito.userPoolClientId,
};

const UserPool = new CognitoUserPool(poolData);

const getUser = (username) => {
  if (Object.keys(window.user).length == 0) {
    window.user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });
  }
  return window.user;
};

const register = (userData) => {
  const AttributeList = [];

  for (const x in userData) {
    const attr = new CognitoUserAttribute({
      Name: x,
      Value: userData[x],
    });
    if (x != "password") {
      AttributeList.push(attr);
    }
  }

  console.log(AttributeList);

  UserPool.signUp(
    userData.email,
    userData.password,
    AttributeList,
    null,
    (err, data) => {
      if (err) {
        console.log("Error");
        console.error(err);
      } else {
        console.log(data);
        window.user = data.user;
        console.log("user name is " + window.user.getUsername());
      }
    }
  );
};

const confirm = ({ username, code }) => {
  console.log(username, code);

  const cognitoUser = window.user;
  cognitoUser.confirmRegistration(code, true, function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    console.log("call result: " + result);
  });
};

const resendCode = () => {
  const cognitoUser = window.user;
  cognitoUser.resendConfirmationCode(function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    console.log("call result: " + result);
  });
};

const login = ({ username, password }) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });
  const cognitoUser = getUser(username);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      const accessToken = result.getAccessToken().getJwtToken();
      const idToken = result.getIdToken().getJwtToken();
      const refreshToken = result.getRefreshToken().getToken();
      console.log({
        accessToken,
        idToken,
        refreshToken,
      });
      // console.log(JSON.stringify(result));
    },
    onFailure: (err) => {
      console.error(err);
      console.log(authenticationDetails);
    },
  });
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const sessionExpire = (token) => {
  const sessionExp = parseJwt(token).exp;
  let curr = new Date().getTime();
  curr = curr / 1000;
  console.log(sessionExp, curr);
  if (curr > sessionExp) {
    return true;
  }
  return false;
};

const getToken = new Promise((resolve, reject) => {
  const cognitoUser = UserPool.getCurrentUser();

  if (cognitoUser) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        console.error(Error("Could not get session!"));
        reject(err);
      } else if (!session.isValid()) {
        console.error(Error("Session invalid!"));
        resolve(null);
      }
      if (sessionExpire(session.getIdToken().getJwtToken())) {
        console.error(Error("Session expired"));
        reject(null);
      } else {
        resolve(session.getIdToken().getJwtToken());
      }
    });
  } else {
    console.error(Error("Could not get user!"));
    reject(null);
  }
});

// {
//   let cognitoUser = UserPool.getCurrentUser();
//   cognitoUser.authenticateUser(
//     {},
//     {
//       onSuccess: (session) => {
//         session.getAccessToken().payload;
//       },
//     }
//   );
// }

module.exports = {
  register,
  confirm,
  resendCode,
  login,
  parseJwt,
  getToken,
};
