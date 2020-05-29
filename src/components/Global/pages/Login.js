import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div id="student-signup">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#6534CC"}}>
                    <a id='back' className="navbar-brand" onclick="back()">
                        <img src={require("../../../assets/logo/LeftArrow.png")} alt="" srcset="" width="35" height="30" />
                    </a>
                    <a id="backtext" onclick="back()"><p className="back-label">Back</p></a>
                </nav>
            </div>
            <div className="content">
                <div>
                    <div className="welcome-text">
                        Welcome <span style={{color: "#FF4133"}}>Back</span>!
                    </div>
                    <div id="step-1" className="row details-container">
                        <div className="col-6 image-column">
                            <img className="info-image" src={require("../../../assets/img/signin-card.png")} alt="Sign in"/>
                        </div>
                        <div className="col-6 input-column">
                            <input type="text" className="input-text" placeholder="Enter your email address" name="email" />
                            <input type="password" className="input-text" placeholder="Enter your password" name="password" />
                            <br />
                            <p id="forgot-password" onclick="next()">Forgot your Password?</p>
                        </div>
                    </div>
                    <div id="step-2" className="row details-container" style={{display: "none"}}>
                        <div className="col-6 image-column">
                            <img className="info-image" src={require("../../../assets/img/signin-card.png")} alt="forgot-password"/>
                        </div>
                        <div className="col-6 input-column">
                            <p id="password-reset">
                                Please enter your Email in the field below to reset your password.
                            </p>
                            <input type="text" className="input-text" placeholder="Enter your email address" name="emailforgot" />
                        </div>
                    </div>
                    <div id="step-3" className="row details-container" style={{display: "none"}}>
                        <div className="col-6 image-column">
                            <img className="info-image" src={require("../../../assets/img/signin-card.png")} alt="forgot-password"/>
                        </div>
                        <div className="col-6 input-column">
                            <input type="text" className="input-text" placeholder="Enter Code Send to Phone" name="code" />
                            <input type="password" className="input-text" name="password1" placeholder="Enter new password" />
                            <input type="password" className="input-text" name="passwordconf" placeholder="Re-type password" />
                        </div>
                    </div>
                    <div id="nextbtn" className="next" onmouseover="document.getElementById('nextbtn').style = 'cursor: pointer'" onclick="handleLogin()">
                        Sign IN{` `}
                        <img id="nextimg" src={require("../../../assets/logo/next.png")} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Login