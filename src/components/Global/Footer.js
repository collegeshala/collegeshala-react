/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";

class Footer extends React.Component {
    state = {};

    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h6>About the company</h6>
                            <a href="./about.html">
                                <h6 className="text-justify">About Us</h6>
                            </a>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="./copyright.html">
                                        Copyright
                                    </a>
                                    <br />
                                    <a
                                        target="_blank"
                                        href="./disclaimer-warranties.html"
                                    >
                                        Disclaimer Warranties
                                    </a>
                                    <br />
                                    <a
                                        target="_blank"
                                        href="./privacy-policy.html"
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a
                                        target="_blank"
                                        href="./return-policy.html"
                                    >
                                        Return Policy
                                    </a>
                                    <br />
                                    <a
                                        target="_blank"
                                        href="./professor-info.html"
                                    >
                                        Course Advisors
                                    </a>
                                    <br />
                                    <a
                                        target="_blank"
                                        href="./terms-of-use.html"
                                    >
                                        Terms of Use
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <h6>Connect With Us</h6>
                            <ul className="footer-links">
                                <li>
                                    <a target="_blank" href="">
                                        <img
                                            src="./../../assets/images/footer/twitter-icon.png"
                                            id="footer-social-icons"
                                            alt=""
                                            srcset=""
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="mailto:collegeshala2020@gmail.com"
                                    >
                                        <img
                                            src="./../../assets/images/footer/gmailicon.png"
                                            id="footer-social-icons"
                                            alt=""
                                            srcset=""
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/CollegeShalareal/"
                                    >
                                        <img
                                            src="./../../assets/images/footer/facebook-icon.png"
                                            id="footer-social-icons"
                                            alt=""
                                            rcset=""
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/company/collegeshala-edutech/"
                                    >
                                        <img
                                            src="./../../assets/images/footer/linkedin-icon.png"
                                            id="footer-social-icons"
                                            alt=""
                                            rcset=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.google.com/maps/dir//offbeats+ccu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a02772f380eb913:0xbc0dddd2e9b59b53?sa=X&ved=2ahUKEwj14s2a3I_pAhUGwzgGHW2kAe0Q9RcwDXoECB0QDg"
                                    >
                                        Office: 405, OFFBEAT CCU, 36/F, Topsia
                                        Rd, Topsia, Kolkata, West Bengal 700039
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Call US: 8583994561, 9230429404
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <p className="text-center" id="footer-copyright-text">
                        <i className="far fa-copyright"></i> 2020 CollegeShala |
                        All Rights Reserved
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
