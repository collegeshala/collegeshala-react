import React from "react";
import { Redirect } from 'react-router-dom';

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
      toBeRedirected: false,
      redirect: "",
    }
  }
  handlemouseover(e) {
    e.target.style = 'cursor : pointer';
  }
  next() {
    // document.getElementById(`step-${this.state.step}`).style = "display: none";
    switch (this.state.step) {
      case 1: this.setState({ step1display: { display: "none" } });
        break;

      case 2: this.setState({ step2display: { display: "none" } });
        break;

      case 3: this.setState({ step3display: { display: "none" } });
        break;

      default:
    }
    // (window.innerWidth > 800)?
    //         document.getElementById(`step-${this.state.step+1}`).style = "display: inline-flex":
    //         document.getElementById(`step-${this.state.step+1}`).style = "display: initial";
    if (window.innerWidth > 800) {
      switch (this.state.step) {
        case 1: this.setState({ step2display: { display: "inline-flex" } });
          break;

        case 2: this.setState({ step3display: { display: "inline-flex" } });
          break;

        default:
      }
    }
    else {
      switch (this.state.step) {
        case 1: this.setState({ step2display: { display: "initial" } });
          break;

        case 2: this.setState({ step3display: { display: "initial" } });
          break;

        default:
      }
    }

    if (this.state.step === 1) {
      this.setState({ nextbtntext: "Finish " });
      this.setState({ nextFunction: this.handleForgetPassword.bind(this) });
    }
    else if (this.state.step === 2) {
      this.setState({ nextbtntext: "Update Password " });
    }
    this.setState({ step: this.state.step + 1 });
  }
  back() {
    if (this.state.step !== 1) {
      switch (this.state.step) {

        case 2: this.setState({ step2display: { display: "none" } });
          break;

        case 3: this.setState({ step3display: { display: "none" } });
          break;

        default:
      }
      if (this.state.step === 2) {
        this.setState({ step: this.state.step - 1 });
      }
      else this.setState({ step: this.state.step - 2 });

      // (window.innerWidth > 800)?
      //               document.getElementById(`step-${step}`).style = "display: inline-flex":
      //               document.getElementById(`step-${step}`).style = "display: initial";
      if (window.innerWidth > 800) {
        switch (this.state.step) {
          case 1: this.setState({ step1display: { display: "inline-flex" } });
            break;

          default:
        }
      }
      else {
        switch (this.state.step) {
          case 1: this.setState({ step1display: { display: "initial" } });
            break;

          default:
        }
      }
      this.setState({ nextbtntext: "Sign IN " });
      this.setState({ nextFunction: this.handleLogin.bind(this) });
    }
    else {
      this.setState({ toBeRedirected: true });
      this.setState({ redirect: "/register" });
    }
  }
  handleLogin() {
    var userData = {
      email: this.state.email,
      password: this.state.password,
    }
    var onSuccess = function loginSuccess(result) {
      console.log('Check user here : ', result);
      window.localStorage.setItem("idToken", result.idToken.jwtToken)
      //let isProf = parseJwt(result.idToken.jwtToken)['custom:isProfessor'];
      //below block is to be uncommented 
      // if (isProf === 'true') {
      //   localStorage.setItem("acc_type", 'professor');
      //   this.setState({ toBeRedirected: true });
      //   this.setState({ redirect: "/teacher-dashboard" });
      // } else {
      //   localStorage.setItem("acc_type", 'student');
      //   this.setState({ toBeRedirected: true });
      //   this.setState({ redirect: "/student-dashboard" });
      // }
    }
    var onFailure = function loginFailure(err) {
      alert(err);
    }
    //logIn(userData,onSuccess,onFailure);
  }
  handleForgetPassword() {
    var email = this.state.emailforgot;
    //forgotPassword(email);
    console.log(email)
  }
  handleResetPassword() {
    var email = this.state.emailforgot;
    var code = this.state.code;
    var password = this.state.password1;
    var password2 = this.state.passwordconf;
    console.log('password2', password2, 'sdsd', password);
    if (password === password2) {
      console.log(code, email, password);
      //resetPassword(code,email,password);
    }
    else
      alert('Passwords dont match');
  }
  render() {
    if (this.state.toBeRedirected) {
      return <Redirect to={this.state.redirect} />
    }
    else return (
      <div id="student-signup">
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#6534CC" }}
          >
            <a id="back" className="navbar-brand" onClick={() => this.back()}>
              <img
                src={require("../../../assets/logo/LeftArrow.png")}
                alt=""
                srcSet=""
                width="35"
                height="30"
              />
            </a>
            <a id="backtext" onClick={() => this.back()}>
              <p className="back-label">Back</p>
            </a>
          </nav>
        </div>
        <div className="content">
          <div>
            <div className="welcome-text">
              Welcome <span style={{ color: "#FF4133" }}>Back</span>!
            </div>
            <div id="step-1" className="row details-container" style={this.state.step1display}>
              <div className="col-6 image-column">
                <img
                  className="info-image"
                  src={require("../../../assets/img/signin-card.png")}
                  alt="Sign in"
                />
              </div>
              <div className="col-6 input-column">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter your email address"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input
                  type="password"
                  className="input-text"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <br />
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
                  type="text"
                  className="input-text"
                  placeholder="Enter your email address"
                  value={this.state.emailforgot}
                  onChange={(e) => this.setState({ emailforgot: e.target.value })}
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
                  onChange={(e) => this.setState({ password1: e.target.value })}
                />
                <input
                  type="password"
                  className="input-text"
                  placeholder="Re-type password"
                  value={this.state.passwordconf}
                  onChange={(e) => this.setState({ passwordconf: e.target.value })}
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
    );
  }
}

export default Login;
