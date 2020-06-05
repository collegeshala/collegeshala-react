import React from 'react'

class StudentRegister extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            college: "",
            university: "-Select University-",
            degree: "-Select Degree-",
            step: 1,
        }
    }
    handlemouseover(e)
    {
        e.target.style = 'cursor : pointer';
    }
    validateEmail(email)
    {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === false) 
            return false;
        return true;
    }
    next()
    {
        if(this.state.step === 1)
        {
            if(!this.validateEmail(this.state.email)) {
                alert("Enter valid email address");
                return;
            }
        }
    }
    render() {
        return (
            <div id="student-signup">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#6534CC" }}>
                        <a id='back' className="navbar-brand" onClick="back()">
                            <img src={require("../../../assets/logo/LeftArrow.png")} alt="" srcset="" width="35" height="30" />
                        </a>
                        <a id="backtext" onClick="back()"><p className="back-label">Back</p></a>
                    </nav>
                </div>
                <div className="content">
                    <div>
                        <div className="progressbar-container">
                            <div className="progressbar">
                                <div id="progval" className="progress-value"></div>
                                <div className="progress-steps">
                                    <img id="step-1-img" src={require("../../../assets/logo/step1.png")} alt="step1" />
                                    <img id="step-2-img" src={require("../../../assets/logo/step2incomplete.png")} alt="step2" />
                                    <img id="step-3-img" src={require("../../../assets/logo/step3incomplete.png")} alt="step3" />
                                    <img id="step-4-img" src={require("../../../assets/logo/step4incomplete.png")} alt="step4" />
                                    <span className="stretch"></span>
                                </div>
                            </div>
                        </div>
                        <div id="step-1" className="row details-container">
                            <div className="col-6 image-column">
                                <div className="info-about">Tell us <span style={{ color: "#FF4133" }}>about</span> you...</div>
                                <img className="info-image" src={require("../../../assets/img/name-email-student-card.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your full name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                                <input type="email" className="input-text" placeholder="Enter your email address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                                <input type="password" className="input-text" placeholder="Enter your password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                            </div>
                        </div>
                        <div id="step-2" className="row details-container" style={{ display: "none" }}>
                            <div className="col-6 image-column">
                                <div className="info-about">Tell us <span style={{ color: "#FF4133" }}>about</span> your college...</div>
                                <img className="info-image" src={require("../../../assets/img/college-details-student-card 1.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column" style={{ paddingTop: "1vh", paddingBottom: "0" }}>
                                <input type="text" className="input-text" placeholder="Enter your college's name" value={this.state.college} onChange={(e) => this.setState({ college: e.target.value })}/>
                                <select onChange="changeCllg()" defaultValue={this.state.university} type="text" className="input-text" id="uname">
                                    <option selected={this.state.university === "-Select University-"} value="select-degree">-Select University-</option>
                                    <option selected={this.state.university === "Calcutta University"} value="Calcutta-University">Calcutta University</option>
                                    <option selected={this.state.university === "Amity University"} value="Amity-University">Amity University</option>
                                    <option selected={this.state.university === "Jadavpur University"} value="Jadavpur-University">Jadavpur University</option>
                                    <option selected={this.state.university === "Techno India University"} value="Techno-India-University">Techno India University</option>
                                    <option selected={this.state.university === "Barasat University"} value="Barasat-University">Barasat University</option>
                                    <option selected={this.state.university === "MAKAUT"} value="MAKAUT">MAKAUT</option>
                                </select>
                                <select className="input-text select-degree" id="select-degree" defaultValue={this.state.degree}>
                                    <option value="">-Select Degree-</option>
                                </select>
                                <select className="input-text select-degree" id="Calcutta-University" defaultValue={this.state.university} style={{ display: "none" }}>
                                    <option value="">-Select Degree-</option>
                                    <option value="BCom">B-Com</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <select className="input-text select-degree" id="Amity-University" defaultValue={this.state.university} style={{ display: "none" }}>
                                    <option value="">-Select Degree-</option>
                                    <option value="BCom">B-Com</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <select className="input-text select-degree" id="Jadavpur-University" defaultValue={this.state.university} style={{ display: "none" }}>
                                    <option value="">-Select Degree-</option>
                                    <option value="BCom">B-Com</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <select className="input-text select-degree" id="Techno-India-University" defaultValue={this.state.university} style={{ display: "none" }}>
                                    <option value="">-Select Degree-</option>
                                    <option value="BCom">B-Com</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <select className="input-text select-degree" id="Barasat-University" defaultValue={this.state.university} style={{ display: "none" }}>
                                    <option value="">-Select Degree-</option>
                                    <option value="BCom">B-Com</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <select className="input-text select-degree" id="MAKAUT" defaultValue={this.state.university} style={{ display: "none" }}>
                                    <option value="">-Select Degree-</option>
                                    <option value="BCom">B-Com</option>
                                    <option value="BBA">BBA</option>
                                </select>
                                <input type="text" className="input-text" placeholder="You are in which semester?" name="sem" />
                            </div>
                        </div>
                        <div id="step-3" className="row details-container" style={{ display: "none" }}>
                            <div className="col-6 image-column">
                                <div className="info-about">One <span style={{ color: "#FF4133" }}>last</span> entry...</div>
                                <img className="info-image" src={require("../../../assets/img/step3.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column" style={{ paddingTop: "1vh", paddingBottom: "0" }}>
                                <select className="input-text" id="knowabout" style={{ fontSize: "20px" }}>
                                    <option value="">-How did you know about Collegeshala-</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="friends">Friends</option>
                                    <option value="collegeshala-collaborators">Collegeshala collaborators</option>
                                    <option value="none">None</option>
                                </select>
                                <input type="text" className="input-text" placeholder="Enter your Phone number" name="phno" /><br />
                                <input type="checkbox" name="termsconditions" />     I accept terms & conditions
                        <button id="verifybtn" className="input-text"><span className="verifyph" onClick="handleSubmit()">Verify</span></button>
                                <input type="number" className="otpinput" placeholder="Enter Your OTP" name="otp" />
                            </div>
                        </div>
                        <div id="step-4" className="row details-container" style={{ display: "none" }}>
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
                        <div id="nextbtn" className="next" onMouseOver={(e) => this.handlemouseover(e)}>
                            Next{" "}
                            <img id="nextimg" src={require("../../../assets/logo/next.png")} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentRegister