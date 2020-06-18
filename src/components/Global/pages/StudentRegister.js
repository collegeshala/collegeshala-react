/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { navigate } from "@reach/router";
import { register, resendCode, confirm } from "./../../../js/auth";
import './../../../assets/css/studentRegister.css'

class StudentRegister extends React.Component {
  constructor(props) {
    super(props);
    this.progval = React.createRef();
    this.state = {
      name: "",
      email: "",
      password: "",
      college: "",
      university: "select-university",
      degree: "",
      sem: 1,
      knowabout: "",
      ccName: "",
      phoneNo: "",
      code: "",
      step: 1,
      verifych: false,
      step1display: {},
      step2display: { display: "none" },
      step3display: { display: "none" },
      step4display: { display: "none" },
      step2img: require("../../../assets/logo/step2incomplete.png"),
      step3img: require("../../../assets/logo/step3incomplete.png"),
      step4img: require("../../../assets/logo/step4incomplete.png"),
      nextbtntext: "Next ",
      sendOtpisClicked: false,
      isChecked: false,
      changeCllgfuncCalls: 0,
    };
  }
  handleSubmit() {
    if (!this.state.isChecked) {
      alert("Please accept terms and conditions");
      return;
    }
    var userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cllgname: this.state.college,
      univname: this.state.university,
      degree: this.state.degree,
      sem: this.state.sem,
      phone: "+91" + Number(this.state.phoneNo),
      isProfessor: false,
    };
    console.log(userData);
    var onSuccess = function registerSuccess(result) {
      var cognitoUser = result.user;
      console.log("Check user here : ", cognitoUser);
      alert(
        "New User created. Please check your phone for the verification code"
      );
    };
    var onFailure = function registerFailure(err) {
      alert(err);
      console.error(err);
    };
    register(userData, onSuccess, onFailure);
    this.setState({ sendOtpisClicked: true });
  }
  resendOtp() {
    const { email } = this.state;
    resendCode(email);
  }
  confirmUser() {
    const { email: username, code } = this.state;
    const confirmData = { username, code };
    const onSuccess = (result) => {
      console.log("call result: " + JSON.stringify(result));
      alert("Successfully verified !");
      this.setState({ verifych : true });
      this.next();
    };
    confirm(confirmData, onSuccess);
  }
  handlemouseover(e) {
    e.target.style = "cursor : pointer";
  }
  changeCllg(e) {
    this.setState({ university: e.target.value });
    this.setState(
      { changeCllgfuncCalls: this.state.changeCllgfuncCalls + 1 },
      () => {
        if (this.state.changeCllgfuncCalls === 1) {
          var defaultcllg = "select-degree";
          var opt = document.getElementById("uname");
          console.log(opt.value);
          document.getElementById(defaultcllg).style = "display: none";
          document.getElementById(opt.value).style = "display: inline-block";
          defaultcllg = opt.value;
        }
      }
    );
  }
  validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(String(email).toLowerCase()) === false) return false;
    return true;
  }
  next() {
    
    if (this.state.step === 4) {
      localStorage.setItem("acc_type", "student");
      navigate("/student-materials");
    } else {
      if (this.state.step === 1) {
        if (!this.validateEmail(this.state.email)) {
          alert("Enter valid email address");
          return;
        }
      }
      if (this.state.step === 3 && !this.state.verifych) {
        this.confirmUser();
      }
      this.progval.current.classList.add(`progress${this.state.step}`);
      setTimeout(() => {
        switch (this.state.step) {
          case 1:
            this.setState({
              step2img: require("../../../assets/logo/step2complete.png"),
            });
            break;

          case 2:
            this.setState({
              step3img: require("../../../assets/logo/step3complete.png"),
            });
            break;

          case 3:
            this.setState({
              step4img: require("../../../assets/logo/step4complete.png"),
            });
            break;

          default:
        }
        this.setState({ step: this.state.step + 1 });
      }, 500);
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

          case 3:
            this.setState({ step4display: { display: "inline-flex" } });
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

          case 3:
            this.setState({ step4display: { display: "initial" } });
            break;

          default:
        }
      }
      // if(step === 2){
      //     document.getElementById('nextbtn').innerHTML = 'Finish<img id="nextimg" src="assets/logo/next.png">';
      // }
      if (this.state.step === 2) {
        this.setState({ nextbtntext: "Finish " });
      }
      if (this.state.step === 3 && this.state.verifych) {
        this.setState({ nextbtntext: "Go to Materials " });
      }
    }
  }
  back() {
    if (this.state.step !== 1) {
      this.progval.current.classList.remove(`progress${this.state.step - 1}`);
      setTimeout(() => {
        switch (this.state.step) {
          case 1:
            this.setState({
              step2img: require("../../../assets/logo/step2incomplete.png"),
            });
            break;

          case 2:
            this.setState({
              step3img: require("../../../assets/logo/step3incomplete.png"),
            });
            break;

          case 3:
            this.setState({
              step4img: require("../../../assets/logo/step4incomplete.png"),
            });
            break;

          default:
        }
      }, 100);
      switch (this.state.step) {
        case 2:
          this.setState({ step2display: { display: "none" } });
          break;

        case 3:
          this.setState({ step3display: { display: "none" } });
          break;

        case 4:
          this.setState({ step4display: { display: "none" } });
          break;

        default:
      }
      if (window.innerWidth > 800) {
        switch (this.state.step) {
          case 2:
            this.setState({ step1display: { display: "inline-flex" } });
            break;

          case 3:
            this.setState({ step2display: { display: "inline-flex" } });
            break;

          case 4:
            this.setState({ step3display: { display: "inline-flex" } });
            break;
          default:
        }
      } else {
        switch (this.state.step) {
          case 2:
            this.setState({ step1display: { display: "initial" } });
            break;

          case 3:
            this.setState({ step2display: { display: "initial" } });
            break;

          case 4:
            this.setState({ step3display: { display: "initial" } });
            break;
          default:
        }
      }
      if (this.state.step === 3) {
        this.setState({ nextbtntext: "Next " });
      } else if (this.state.step === 4) {
        this.setState({ nextbtntext: "Finish " });
      }
      this.setState({ step: this.state.step - 1 });
    } else {
      navigate("/register");
    }
  }
  render() {
    // const css = `
    //   .content {
    //       margin: 4vh 9.5vw;
    //       height: 80vh;
    //   }
    //   .next {
    //       margin: 14vh 0 2vh 65vw;
    //       padding-right: 3vw;
    //   }
    //   @media only screen and (max-width: 800px) {
    //       .content{
    //           height: auto;
    //           width: 100vw;
    //           margin: 0;
    //       }
    //       .next{
    //           margin: 2vh 0 2vh 65vw;
    //       }
    //   }
      
    //   `;
    let OtpButton;
    if (this.state.sendOtpisClicked) {
      OtpButton = (
          <button id="resendbtn" className="input-text">
            <span className="verifyph" onClick={() => this.resendOtp()}>
              Resend OTP
            </span>
          </button>
      );
    } else
      OtpButton = (
        <button id="sendbtn" className="input-text">
          <span className="verifyph" onClick={() => this.handleSubmit()}>
            Send OTP
          </span>
        </button>
      );

    return (
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
            <div className="progressbar-container">
              <div className="progressbar">
                <div
                  id="progval"
                  ref={this.progval}
                  className="progress-value"
                ></div>
                <div className="progress-steps">
                  <img
                    id="step-1-img"
                    src={require("../../../assets/logo/step1.png")}
                    alt="step1"
                  />
                  <img id="step-2-img" src={this.state.step2img} alt="step2" />
                  <img id="step-3-img" src={this.state.step3img} alt="step3" />
                  <img id="step-4-img" src={this.state.step4img} alt="step4" />
                </div>
              </div>
            </div>
            <div
              id="step-1"
              className="row details-container"
              style={this.state.step1display}
            >
              <div className="col-6 image-column">
                <div className="info-about">
                  Tell us <span style={{ color: "#FF4133" }}>about</span> you...
                </div>
                <img
                  className="info-image"
                  src={require("../../../assets/img/name-email-student-card.png")}
                  alt="Register as student"
                />
              </div>
              <div className="col-6 input-column">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter your full name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <input
                  type="email"
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
              </div>
            </div>
            <div
              id="step-2"
              className="row details-container"
              style={this.state.step2display}
            >
              <div className="col-6 image-column">
                <div className="info-about">
                  Tell us <span style={{ color: "#FF4133" }}>about</span> your
                  college...
                </div>
                <img
                  className="info-image"
                  src={require("../../../assets/img/college-details-student-card 1.png")}
                  alt="Register as student"
                />
              </div>
              <div
                className="col-6 input-column"
                style={{ paddingTop: "1vh", paddingBottom: "0" }}
              >
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter your college's name"
                  value={this.state.college}
                  onChange={(e) => this.setState({ college: e.target.value })}
                />
                <select
                  onChange={(e) => this.changeCllg(e)}
                  defaultValue={this.state.university}
                  type="text"
                  className="input-text"
                  id="uname"
                >
                  <option
                    selected={this.state.university === "select-university"}
                    value="select-university"
                  >
                    -Select University-
                  </option>
                  <option
                    selected={this.state.university === "Calcutta-University"}
                    value="Calcutta-University"
                  >
                    Calcutta University
                  </option>
                  <option
                    selected={this.state.university === "Amity-University"}
                    value="Amity-University"
                  >
                    Amity University
                  </option>
                  <option
                    selected={this.state.university === "Jadavpur-University"}
                    value="Jadavpur-University"
                  >
                    Jadavpur University
                  </option>
                  <option
                    selected={
                      this.state.university === "Techno-India-University"
                    }
                    value="Techno-India-University"
                  >
                    Techno India University
                  </option>
                  <option
                    selected={this.state.university === "Barasat-University"}
                    value="Barasat-University"
                  >
                    Barasat University
                  </option>
                  <option
                    selected={this.state.university === "MAKAUT"}
                    value="MAKAUT"
                  >
                    MAKAUT
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="select-degree"
                  defaultValue={this.state.degree}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="Calcutta-University"
                  defaultValue={this.state.degree}
                  style={{ display: "none" }}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                  <option selected={this.state.degree === "BCom"} value="BCom">
                    B-Com
                  </option>
                  <option selected={this.state.degree === "BBA"} value="BBA">
                    BBA
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Honours"}
                    value="BSc-Botany-Honours"
                  >
                    B. Sc Botany (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Pass"}
                    value="BSc-Botany-Pass"
                  >
                    B. Sc Botany (Pass)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Honours"}
                    value="BA-English-Honours"
                  >
                    BA English (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Pass"}
                    value="BA-English-Pass"
                  >
                    BA English (Pass)
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="Amity-University"
                  defaultValue={this.state.degree}
                  style={{ display: "none" }}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                  <option selected={this.state.degree === "BCom"} value="BCom">
                    B-Com
                  </option>
                  <option selected={this.state.degree === "BBA"} value="BBA">
                    BBA
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Honours"}
                    value="BSc-Botany-Honours"
                  >
                    B. Sc Botany (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Pass"}
                    value="BSc-Botany-Pass"
                  >
                    B. Sc Botany (Pass)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Honours"}
                    value="BA-English-Honours"
                  >
                    BA English (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Pass"}
                    value="BA-English-Pass"
                  >
                    BA English (Pass)
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="Jadavpur-University"
                  defaultValue={this.state.degree}
                  style={{ display: "none" }}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                  <option selected={this.state.degree === "BCom"} value="BCom">
                    B-Com
                  </option>
                  <option selected={this.state.degree === "BBA"} value="BBA">
                    BBA
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Honours"}
                    value="BSc-Botany-Honours"
                  >
                    B. Sc Botany (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Pass"}
                    value="BSc-Botany-Pass"
                  >
                    B. Sc Botany (Pass)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Honours"}
                    value="BA-English-Honours"
                  >
                    BA English (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Pass"}
                    value="BA-English-Pass"
                  >
                    BA English (Pass)
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="Techno-India-University"
                  defaultValue={this.state.degree}
                  style={{ display: "none" }}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                  <option selected={this.state.degree === "BCom"} value="BCom">
                    B-Com
                  </option>
                  <option selected={this.state.degree === "BBA"} value="BBA">
                    BBA
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Honours"}
                    value="BSc-Botany-Honours"
                  >
                    B. Sc Botany (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Pass"}
                    value="BSc-Botany-Pass"
                  >
                    B. Sc Botany (Pass)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Honours"}
                    value="BA-English-Honours"
                  >
                    BA English (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Pass"}
                    value="BA-English-Pass"
                  >
                    BA English (Pass)
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="Barasat-University"
                  defaultValue={this.state.degree}
                  style={{ display: "none" }}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                  <option selected={this.state.degree === "BCom"} value="BCom">
                    B-Com
                  </option>
                  <option selected={this.state.degree === "BBA"} value="BBA">
                    BBA
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Honours"}
                    value="BSc-Botany-Honours"
                  >
                    B. Sc Botany (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Pass"}
                    value="BSc-Botany-Pass"
                  >
                    B. Sc Botany (Pass)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Honours"}
                    value="BA-English-Honours"
                  >
                    BA English (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Pass"}
                    value="BA-English-Pass"
                  >
                    BA English (Pass)
                  </option>
                </select>
                <select
                  className="input-text select-degree"
                  id="MAKAUT"
                  defaultValue={this.state.degree}
                  style={{ display: "none" }}
                  onChange={(e) => this.setState({ degree: e.target.value })}
                >
                  <option selected={this.state.degree === ""} value="">
                    -Select Degree-
                  </option>
                  <option selected={this.state.degree === "BCom"} value="BCom">
                    B-Com
                  </option>
                  <option selected={this.state.degree === "BBA"} value="BBA">
                    BBA
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Honours"}
                    value="BSc-Botany-Honours"
                  >
                    B. Sc Botany (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BSc-Botany-Pass"}
                    value="BSc-Botany-Pass"
                  >
                    B. Sc Botany (Pass)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Honours"}
                    value="BA-English-Honours"
                  >
                    BA English (Honours)
                  </option>
                  <option
                    selected={this.state.degree === "BA-English-Pass"}
                    value="BA-English-Pass"
                  >
                    BA English (Pass)
                  </option>
                </select>
                <input
                  type="text"
                  className="input-text"
                  placeholder="You are in which semester?"
                  onChange={(e) =>
                    this.setState({ sem: Number(e.target.value) })
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
                <div className="info-about">
                  One <span style={{ color: "#FF4133" }}>last</span> entry...
                </div>
                <img
                  className="info-image"
                  src={require("../../../assets/img/step3.png")}
                  alt="Register as student"
                />
              </div>
              <div
                className="col-6 input-column"
                style={{ paddingTop: "1vh", paddingBottom: "0" }}
              >
                <select
                  className="input-text"
                  id="knowabout"
                  style={{ fontSize: "20px" }}
                  onChange={(e) => this.setState({ knowabout: e.target.value })}
                >
                  <option value="">
                    -How did you know about Collegeshala-
                  </option>
                  <option value="social-media">Social Media</option>
                  <option value="friends">Friends</option>
                  <option value="collegeshala-collaborators">
                    Collegeshala collaborators
                  </option>
                  <option value="none">None</option>
                </select>
                {/* <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Collaborator's Name"
                  style={{
                    display:
                      this.state.knowabout === "collegeshala-collaborators"
                        ? ""
                        : "none",
                  }}
                  value={this.state.ccName}
                  onChange={(e) => this.setState({ ccName: e.target.value })}
                /> */}
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter your Phone number"
                  value={this.state.phoneNo}
                  onChange={(e) => this.setState({ phoneNo: e.target.value })}
                />
                <br />
                <input
                  type="checkbox"
                  name="termsconditions"
                  defaultChecked={this.state.isChecked}
                  onChange={() =>
                    this.setState({ isChecked: !this.state.isChecked })
                  }
                />{" "}
                I accept terms & conditions
                <br />
                <div
                  className="otpbtncontainer"
                  style={{ textAlign: "center" }}
                >
                  {OtpButton}
                </div>
                <input
                  type="number"
                  className="otpinput"
                  placeholder="Enter Your OTP"
                  name="otp"
                  onChange={(e) => this.setState({ code: e.target.value })}
                />
              </div>
            </div>
            <div
              id="step-4"
              className="row details-container"
              style={this.state.step4display}
            >
              <div className="col-6 image-column">
                <img
                  className="info-image"
                  src={require("../../../assets/img/rocket-human-icon 1.png")}
                  alt="Register as student"
                />
              </div>
              <div className="col-6 input-column">
                <div className="hurray">
                  HURRAY<span style={{ color: "#6534CC" }}>!</span>
                </div>
                <p className="success-message">
                  You are registered on our platform. Head over to you
                  dashboard.
                </p>
              </div>
            </div>
            <div
              id="nextbtn"
              className="next"
              onMouseOver={(e) => this.handlemouseover(e)}
              onClick={() => this.next()}
            >
              {this.state.nextbtntext}
              <img
                id="nextimg"
                alt="next-logo"
                src={require("../../../assets/logo/next.png")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRegister;
