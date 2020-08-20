/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../Footer";

import { navigate } from "@reach/router";
import {
  login,
  forgotPassword,
  resetPassword,
  parseJwt,
  signout,
} from "./../../../js/auth";
import "../../../assets/css/studentRegister.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailforgot: "",
      code: "",
      password1: "",
      passwordconf: "",
      step: 1,
      step1display: {},
      step2display: { display: "none" },
      step3display: { display: "none" },
      nextbtntext: "Sign IN ",
      nextFunction: this.handleLogin.bind(this),
    };
  }
  handlemouseover(e) {
    e.target.style.cursor = "pointer";
  }
  next() {
    // document.getElementById(`step-${this.state.step}`).style = "display: none";
    switch (this.state.step) {
      case 1:
        this.setState({ step1display: { display: "none" } });
        break;

      case 2:
        this.setState({ step2display: { display: "none" } });
        break;

      case 3:
        this.setState({ step3display: { display: "none" } });
        break;

      default:
    }
    // (window.innerWidth > 800)?
    //         document.getElementById(`step-${this.state.step+1}`).style = "display: inline-flex":
    //         document.getElementById(`step-${this.state.step+1}`).style = "display: initial";
    if (window.innerWidth > 800) {
      switch (this.state.step) {
        case 1:
          this.setState({ step2display: { display: "inline-flex" } });
          break;

        case 2:
          this.setState({ step3display: { display: "inline-flex" } });
          break;

        default:
      }
    } else {
      switch (this.state.step) {
        case 1:
          this.setState({ step2display: { display: "initial" } });
          break;

        case 2:
          this.setState({ step3display: { display: "initial" } });
          break;

        default:
      }
    }

    if (this.state.step === 1) {
      this.setState({ nextbtntext: "Finish " });
      this.setState({ nextFunction: this.handleForgetPassword.bind(this) });
    } else if (this.state.step === 2) {
      this.setState({ nextbtntext: "Update Password " });
      this.setState({ nextFunction: this.handleResetPassword.bind(this) });
    }
    this.setState({ step: this.state.step + 1 });
  }
  backCallback() {
    // (window.innerWidth > 800)?
    //               document.getElementById(`step-${step}`).style = "display: inline-flex":
    //               document.getElementById(`step-${step}`).style = "display: initial";
    if (window.innerWidth > 800) {
      switch (this.state.step) {
        case 1:
          this.setState({ step1display: { display: "inline-flex" } });
          break;

        default:
      }
    } else {
      switch (this.state.step) {
        case 1:
          this.setState({ step1display: { display: "initial" } });
          break;

        default:
      }
    }
    this.setState({ nextbtntext: "Sign IN " });
    this.setState({ nextFunction: this.handleLogin.bind(this) });
  }
  back() {
    if (this.state.step !== 1) {
      switch (this.state.step) {
        case 2:
          this.setState({ step2display: { display: "none" } });
          break;

        case 3:
          this.setState({ step3display: { display: "none" } });
          break;

        default:
      }
      if (this.state.step === 2) {
        this.setState({ step: this.state.step - 1 }, () => this.backCallback());
      } else
        this.setState({ step: this.state.step - 2 }, () => this.backCallback());
      // adding callback as setstate is asynchronous and does not update
    } else {
      navigate("/register");
    }
  }

  handleLogin() {
    var userData = {
      username: this.state.email,
      password: this.state.password,
    };
    // console.log({ userData });
    const onSuccess = (result) => {
      console.log(result);
      const accessToken = result.getAccessToken().getJwtToken();
      const idToken = result.getIdToken().getJwtToken();
      const refreshToken = result.getRefreshToken().getToken();
      const payload = result.getAccessToken().payload;
      // console.log(parseJwt(idToken));
      console.log({
        accessToken,
        idToken,
        refreshToken,
        payload,
      });
      localStorage.setItem("username", userData.username);
      localStorage.setItem("idToken", idToken);
      if (parseJwt(idToken)["custom:isProfessor"] === "true") {
        navigate("/professor-account");
      } else {
        navigate("/student-materials");
      }
    };
    const onFailure = (err) => {
      console.error(err);
      alert("Login unsuccessfull :-/");
      this.setState({
        email: "",
        password: "",
      });
    };
    login(userData, onSuccess, onFailure);
  }
  handleForgetPassword() {
    console.log("fp");
    var email = this.state.emailforgot;
    console.log(email);
    const onSuccess = (data) => {
      console.log(
        "CodeDeliveryData from forgotPassword: " + JSON.stringify(data)
      );
      this.next();
    };
    forgotPassword(email, onSuccess);
  }
  handleResetPassword() {
    console.log("rp");
    const email = this.state.emailforgot;
    const code = this.state.code;
    const password = this.state.password1;
    const password2 = this.state.passwordconf;
    console.log("password2", password2, "sdsd", password);
    if (password === password2) {
      console.log(code, email, password);
      const onSuccess = () => {
        alert("Password has been reset sucessfully");
        window.location.reload(false);
      };
      resetPassword({ code, username: email, password }, onSuccess);
    } else alert("Passwords dont match");
  }
  render() {
    return (
      <div>
        <div id="student-signup">
          <div>
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ backgroundColor: "#6534CC" }}
            >
              <a
                href="#"
                id="back"
                className="navbar-brand"
                onClick={() => this.back()}
              >
                <img
                  src={require("../../../assets/logo/LeftArrow.png")}
                  alt=""
                  srcSet=""
                  width="35"
                  height="30"
                />
              </a>
              <a href="#" id="backtext" onClick={() => this.back()}>
                <p className="back-label">Back</p>
              </a>
            </nav>
          </div>
          <div className="content">
            <div>
              <div className="welcome-text">
                Welcome <span style={{ color: "#FF4133" }}>Back</span>!
              </div>
              <div
                id="step-1"
                className="row details-container"
                style={this.state.step1display}
              >
                <div className="col-6 image-column">
                  <img
                    className="info-image"
                    src={require("../../../assets/img/signin-card.png")}
                    alt="Sign in"
                  />
                </div>
                <div className="col-6 input-column">
                  <input
                    type="email"
                    className="input-text"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    onKeyPress={(e) => {
                      if (e.key == "Enter") {
                        this.handleLogin();
                      }
                    }}
                  />
                  <input
                    type="password"
                    className="input-text"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    onKeyPress={(e) => {
                      if (e.key == "Enter") {
                        this.handleLogin();
                      }
                    }}
                  />
                  <br />
                  <div id="register-link">
                    Don't have an account?
                    <a href="" onClick={() => navigate("/register")}>
                      <span style={{ color: "#ff4133" }}> Register here</span>
                    </a>
                  </div>
                  <p id="forgot-password" onClick={() => this.next()}>
                    Forgot your Password?
                  </p>
                </div>
              </div>
              <div
                id="step-2"
                className="row details-container"
                style={this.state.step2display}
              >
                <div className="col-6 image-column">
                  <img
                    className="info-image"
                    src={require("../../../assets/img/signin-card.png")}
                    alt="forgot-password"
                  />
                </div>
                <div className="col-6 input-column">
                  <p id="password-reset">
                    Please enter your Email in the field below to reset your
                    password.
                  </p>
                  <input
                    type="email"
                    className="input-text"
                    placeholder="Enter your email address"
                    value={this.state.emailforgot}
                    onChange={(e) =>
                      this.setState({ emailforgot: e.target.value })
                    }
                  />
                </div>
              </div>
              <div
                id="step-3"
                className="row details-container"
                style={this.state.step3display}
              >
                <div className="col-6 image-column">
                  <img
                    className="info-image"
                    src={require("../../../assets/img/signin-card.png")}
                    alt="forgot-password"
                  />
                </div>
                <div className="col-6 input-column">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Enter Code Send to Phone"
                    value={this.state.code}
                    onChange={(e) => this.setState({ code: e.target.value })}
                  />
                  <input
                    type="password"
                    className="input-text"
                    placeholder="Enter new password"
                    value={this.state.password1}
                    onChange={(e) =>
                      this.setState({ password1: e.target.value })
                    }
                  />
                  <input
                    type="password"
                    className="input-text"
                    placeholder="Re-type password"
                    value={this.state.passwordconf}
                    onChange={(e) =>
                      this.setState({ passwordconf: e.target.value })
                    }
                  />
                </div>
              </div>
              <div
                id="nextbtn"
                className="next"
                onMouseOver={(e) => this.handlemouseover(e)}
                onClick={this.state.nextFunction}
              >
                {this.state.nextbtntext}
                <img
                  id="nextimg"
                  alt="nextbutton"
                  src={require("../../../assets/logo/next.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
