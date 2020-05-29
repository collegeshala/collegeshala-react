import React from 'react'

class Register extends React.Component {
    render() {
        return (
            <div id="register">
                {/* Register Navbar */}
                <div>
                    <nav
                        className="navbar navbar-expand-lg navbar-dark"
                        style={{backgroundColor: "#6534cc"}}
                        >
                        <a className="navbar-brand" href="/index.html">
                            <img
                            src={require("../../../assets/logo/LeftArrow.png")}
                            alt=""
                            srcset=""
                            width="35"
                            height="30" />
                        </a>
                        <p className="back-label">Back</p>
                    </nav>
                </div>
                {/* Register Main */}
                <div className="content">
                    <div className="register-choice">
                        <div className="tap-on-your-side-text">
                            TAP <span style={{color: "#6534cc"}}>ON YOUR</span> SIDE<span
                            style={{color: "#6534cc"}}
                            >!</span
                            >
                        </div>
                        <div className="row choice-container">
                            <div className="col-6 student-choice">
                                <a href="/studentRegister.html">
                                <img
                                className="studentimg"
                                src={require("../../../assets/img/student-reg-page.png")}
                                alt="Register as student" /></a>
                                <div className="student-link">
                                    Are you<a href="/studentRegister.html"
                                    ><span style={{color: "#ff4133"}}> student?</span></a
                                    >
                                </div>
                            </div>
                            <div className="col-6 teacher-choice">
                                <a href="./teacherRegister.html"
                                    ><img
                                    className="teacherimg"
                                    src={require("../../../assets/img/teacher-reg-page.png")}
                                    alt="Register as teacher"
                                /></a>
                                <div className="teacher-link">
                                    Are you<a href="./teacherRegister.html"
                                    ><span style={{color: "#ff4133"}}> teacher?</span></a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="login-link">
                            Already Registered?<a href="./login.html"
                            ><span style={{color: "#ff4133"}}> Login here</span></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;