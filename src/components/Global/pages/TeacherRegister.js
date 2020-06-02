import React from 'react'

class TeacherRegister extends React.Component {
    render() {
        return (
            <div id="student-signup">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#6534CC" }}>
                        <a id='back' className="navbar-brand" onclick="back()">
                            <img src={require("../../../assets/logo/LeftArrow.png")} alt="" srcset="" width="35" height="30" />
                        </a>
                        <a id="backtext" onclick="back()"><p className="back-label">Back</p></a>
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
                                <img className="info-image" src={require("../../../assets/img/teacher-details-svg.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your full name" name="fname" />
                                <input type="text" className="input-text" placeholder="Enter your email address" name="email" />
                                <input type="password" className="input-text" placeholder="Enter your password" name="password" />
                            </div>
                        </div>
                        <div id="step-2" className="row details-container" style={{ display: "none" }}>
                            <div className="col-6 image-column">
                                <div className="info-about">Tell us <span style={{ color: "#FF4133" }}>about</span> your college...</div>
                                <img className="info-image" src={require("../../../assets/img/teaching-details.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your college's name" name="cname" />
                                <input type="text" className="input-text" placeholder="Enter your department" name="dept" />
                                <input type="text" className="input-text" placeholder="You teach which subjects?" name="sub" />
                            </div>
                        </div>
                        <div id="step-3" className="row details-container" style={{ display: "none" }}>
                            <div className="col-6 image-column">
                                <div className="info-about">One <span style={{ color: "#FF4133" }}>last</span> entry...</div>
                                <img className="info-image" src={require("../../../assets/img/teachersverify.png")} alt="Register as student" />
                            </div>
                            <div className="col-6 input-column">
                                <input type="text" className="input-text" placeholder="Enter your Phone number" name="phone" /><br />
                                <input type="checkbox" name="termsconditions" />     I accept terms & conditions
                        <button id="verifybtn" className="input-text" onclick="handleSubmit()"><span className="verifyph">Verify</span></button>
                                <input type="text" className="otpinput" placeholder="Enter Your OTP" name="otp" />
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
                        <div id="nextbtn" className="next" onmouseover="document.getElementById('nextbtn').style = 'cursor: pointer'" onclick="next()">
                            Next{" "}
                    <img id="nextimg" src={require("../../../assets/logo/next.png")} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherRegister;