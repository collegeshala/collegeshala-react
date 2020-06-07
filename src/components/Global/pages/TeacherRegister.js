import React from 'react'

class TeacherRegister extends React.Component {
    constructor(props) {
        super(props);
        this.progval = React.createRef();
        this.state = {
            name: "",
            email: "",
            password: "",
            college: "",
            dept: "",
            subject: "",
            phoneNo: 0,
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
            otptext: "Send OTP",
            isChecked: false,
        }
    }
    handleSubmit() {
        if (!this.state.isChecked) {
            alert('Please accept terms and conditions');
            return;
        }
        var userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cllgname: this.state.college,
            department: this.state.dept,
            subject: this.state.subject,
            phone: '+91' + this.state.phoneNo,
            isProfessor: true,
        }
        var onSuccess = function registerSuccess(result) {
            var cognitoUser = result.user;
            console.log('Check user here : ', cognitoUser);
            alert("New User created. Please check your phone for the verification code");
        }
        var onFailure = function registerFailure(err) {
            alert(err);
            console.error(err);
        }
        //Not written yet
        //register(userData,onSuccess,onFailure);
    }
    otp() {
        this.setState({ otptext: "Resend OTP" })
    }
    handlemouseover(e) {
        e.target.style = 'cursor : pointer';
    }
    validateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(String(email).toLowerCase()) === false)
            return false;
        return true;
    }
    next() {
        if (this.state.step === 3 && !this.state.verifych) {
            //Not Written
            // handleVerify();
        }
        if (this.state.step === 4) {
            localStorage.setItem("acc_type", 'professor');
            //Doesn't work. Route to be added
            //window.location.href = "/login.html"
        }
        else {
            if (this.state.step === 1) {
                if (!this.validateEmail(this.state.email)) {
                    alert("Enter valid email address");
                    return;
                }
            }
            this.progval.current.classList.add(`progress${this.state.step}`);
            setTimeout(() => {
                switch (this.state.step) {
                    case 1: this.setState({ step2img: require("../../../assets/logo/step2complete.png") });
                        break;

                    case 2: this.setState({ step3img: require("../../../assets/logo/step3complete.png") });
                        break;

                    case 3: this.setState({ step4img: require("../../../assets/logo/step4complete.png") });
                        break;

                    default:
                }
                this.setState({ step: this.state.step + 1 });
            }, 500);

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

                    case 3: this.setState({ step4display: { display: "inline-flex" } });
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

                    case 3: this.setState({ step4display: { display: "initial" } });
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
            // if(verifych){
            //     document.getElementById('nextbtn').innerHTML = 'Go to HomePage<img id="nextimg" src="assets/logo/next.png">';
            // }
            if (this.state.verifych) {
                this.setState({ nextbtntext: "Go to HomePage " });
            }
        }
    }
    back() {
        if (this.state.step !== 1) {
            switch (this.state.step) {

                case 2: this.setState({ step2display: { display: "none" } });
                    break;

                case 3: this.setState({ step3display: { display: "none" } });
                    break;

                case 4: this.setState({ step4display: { display: "none" } });
                    break;

                default:
            }
            if (window.innerWidth > 800) {
                switch (this.state.step) {
                    case 2: this.setState({ step1display: { display: "inline-flex" } });
                        break;

                    case 3: this.setState({ step2display: { display: "inline-flex" } });
                        break;

                    case 4: this.setState({ step3display: { display: "inline-flex" } });
                        break;
                    default:
                }
            }
            else {
                switch (this.state.step) {
                    case 2: this.setState({ step1display: { display: "initial" } });
                        break;

                    case 3: this.setState({ step2display: { display: "initial" } });
                        break;

                    case 4: this.setState({ step3display: { display: "initial" } });
                        break;
                    default:
                }
            }
            if (this.state.step === 3) {
                this.setState({ nextbtntext: "Next " });
            }
            else if (this.state.step === 4) {
                this.setState({ nextbtntext: "Finish " });
            }
            this.setState({ step: this.state.step - 1 });
        }
        else {
            //Route to register component to be added
        }
    }
    render() {
        return (
            <div id="student-signup">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#6534CC" }}>
                        <a id='back' className="navbar-brand" onClick={() => this.back()}>
                            <img src={require("../../../assets/logo/LeftArrow.png")} alt="" srcset="" width="35" height="30" />
                        </a>
                        <a id="backtext" onClick={() => this.back()}><p className="back-label">Back</p></a>
                    </nav>
                </div>
                <div className="content">
                    <div>
                        <div className="progressbar-container">
                            <div className="progressbar">
                                <div id="progval" ref={this.progval} className="progress-value"></div>
                                <div className="progress-steps">
                                    <img id="step-1-img" src={require("../../../assets/logo/step1.png")} alt="step1" />
                                    <img id="step-2-img" src={this.state.step2img} alt="step2" />
                                    <img id="step-3-img" src={this.state.step3img} alt="step3" />
                                    <img id="step-4-img" src={this.state.step4img} alt="step4" />
                                    <span className="stretch"></span>
                                </div>
                            </div>
                        </div>
                        <div id="step-1" className="row details-container" style={this.state.step1display}>
                            <div className="col-6 image-column">
                                <div className="info-about">Tell us <span style={{ color: "#FF4133" }}>about</span> you...</div>
                                <img className="info-image" src={require("../../../assets/img/teacher-details-svg.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your full name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                <input type="email" className="input-text" placeholder="Enter your email address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                <input type="password" className="input-text" placeholder="Enter your password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                        </div>
                        <div id="step-2" className="row details-container" style={this.state.step2display}>
                            <div className="col-6 image-column">
                                <div className="info-about">Tell us <span style={{ color: "#FF4133" }}>about</span> your college...</div>
                                <img className="info-image" src={require("../../../assets/img/teaching-details.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your college's name" value={this.state.college} onChange={(e) => this.setState({ college: e.target.value })} />
                                <input type="text" className="input-text" placeholder="Enter your department" value={this.state.dept} onChange={(e) => this.setState({ dept: e.target.value })} />
                                <input type="text" className="input-text" placeholder="You teach which subjects?" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} />
                            </div>
                        </div>
                        <div id="step-3" className="row details-container" style={this.state.step3display}>
                            <div className="col-6 image-column">
                                <div className="info-about">One <span style={{ color: "#FF4133" }}>last</span> entry...</div>
                                <img className="info-image" src={require("../../../assets/img/teachersverify.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your Phone number" value={this.state.phoneNo} onChange={(e) => this.setState({ phoneNo: e.target.value })} /><br />
                                <input type="checkbox" name="termsconditions" checked={this.state.isChecked} onChange={(e) => this.setState({ isChecked: e.target.value })} />     I accept terms & conditions
                                <div class="container" style={{ display: "inline-block" }}>
                                    <button id="verifybtn" className="input-text"><span className="verifyph" onClick={() => this.otp()}>{this.state.otptext}</span></button>
                                    <button id="verifybtn" className="input-text"><span className="verifyph" onClick={() => this.handleSubmit()}>Verify</span></button>
                                </div>

                                <input type="text" className="otpinput" placeholder="Enter Your OTP" name="otp" />
                            </div>
                        </div>
                        <div id="step-4" className="row details-container" style={this.state.step4display}>
                            <div className="col-6 image-column">
                                <img className="info-image" src={require("../../../assets/img/rocket-human-icon 1.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <div className="hurray">HURRAY<span style={{ color: "#6534CC" }}>!</span></div>
                                <p className="success-message">You are registered on our platform.
                                Head over to you dashboard.
                        </p>
                            </div>
                        </div>
                        <div id="nextbtn" className="next" onMouseOver={(e) => this.handlemouseover(e)} onClick={() => this.next()}>
                            {this.state.nextbtntext}
                            <img id="nextimg" src={require("../../../assets/logo/next.png")} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherRegister;