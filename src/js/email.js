import axios from "axios";
import AWS from "aws-sdk";

export const mail = async (amount, token) => {
  try {
    const config = (
      await axios({
        method: "POST",
        url: "https://api.collegeshala.com/ses-key",
        headers: {
          authorization: token,
        },
      })
    ).data;

    const profDetails = (
      await axios({
        method: "POST",
        url: "https://api.collegeshala.com/professordetails",
        headers: {
          authorization: token,
        },
      })
    ).data.Item;
    const { fullName: name, email } = profDetails;
    const prof = { name, email, amount };

    AWS.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: "ap-south-1",
    });

    const SES = new AWS.SES();

    sendMail(prof, SES);
  } catch (error) {
    console.error(error);
    alert("Oops! There was some error in processing your request :-/");
  }
};

const sendMail = ({ name, email, amount }, SES) => {
  let emailBody = `<h3>Hello from CollegeShala</h3>
    <h4>We have received your request for withdrawal amount &#8377; ${amount}.</h4>
    <h4>It will be reflected in your account within 72 hours.</h4>
    <h3>Thank You.</h3>`;

  const paramsProf = {
    Message: {
      Body: {
        Html: {
          Data: emailBody,
          Charset: "UTF-8",
        },
        Text: {
          Data: `We have received your request for withdrawal amount Rs. ${amount}. It will be 
                    reflected in your account within 72 hours. \nThank you` /* required */,
          Charset: "UTF-8",
        },
      },
      Subject: {
        Data: "Redeem Credits Notification" /* required */,
        Charset: "UTF-8",
      },
    },
    Destination: {
      ToAddresses: [email],
    },
    Source: "collegeshala2020@gmail.com",
  };

  SES.sendEmail(paramsProf, function (err, data) {
    if (err) console.error(err, err.stack);
    // an error occurred
    else console.log(JSON.stringify(data)); // successful response
  });

  emailBody = `<p>Professor ${name} (${email}) has requested a withdrawal of amount of &#8377; ${amount}.`;

  const paramsCo = {
    Message: {
      Body: {
        Html: {
          Data: emailBody,
          Charset: "UTF-8",
        },
        Text: {
          Data: `Professor ${name} (${email}) has requested a withdrawal of amount of ${amount}.`,
          Charset: "UTF-8",
        },
      },
      Subject: {
        Data: "Redeem Credits Notification" /* required */,
        Charset: "UTF-8",
      },
    },
    Destination: {
      ToAddresses: ["collegeshala2020@gmail.com"],
    },
    Source: "collegeshala2020@gmail.com",
  };

  SES.sendEmail(paramsCo, function (err, data) {
    if (err) console.error(err, err.stack);
    // an error occurred
    else {
      console.log(JSON.stringify(data)); // successful response
      alert(
        "Your request for redeeming credits has been acknowledged. Please check your mail."
      );
    }
  });
};
