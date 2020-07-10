/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import { Link } from '@reach/router';
import fb_icon from "./../../assets/img/footer/facebook-icon.png";
import twitter_icon from "./../../assets/img/footer/twitter-icon.png";
import linkedin_icon from "./../../assets/img/footer/linkedin-icon.png";
import gmail_icon from "./../../assets/img/footer/gmailicon.png";

class Footer extends React.Component {
  state = {};

  render() {
    return (
      <footer className="site-footer" id="global-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Link to="/about">
                <h6 className="text-justify">About Us</h6>
              </Link>
              <div className="row">
                <div className="col-12 col-md-4">
                  <Link to="/copyright">
                    Copyright
                  </Link>
                  <br />
                  <Link to="/disclaimer-warranties">
                    Disclaimer Warranties
                  </Link>
                  <br />
                  <Link to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </div>
                <div className="col-12 col-md-4">
                  <Link to="/return-policy">
                    Return Policy
                  </Link>
                  <br />
                  <Link to="/professor-info">
                    Course Advisors
                  </Link>
                  <br />
                  <Link to="/terms-of-use">
                    Terms of Use
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-4">
              <h6>Connect With Us</h6>
              <ul className="footer-links">
                <li>
                  <a target="_blank" href="">
                    <img
                      src={twitter_icon}
                      id="footer-social-icons"
                      alt=""
                      srcSet=""
                    />
                  </a>
                  <a target="_blank" href="mailto:collegeshala2020@gmail.com">
                    <img
                      src={gmail_icon}
                      id="footer-social-icons"
                      alt=""
                      srcSet=""
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/CollegeShalareal/"
                  >
                    <img
                      src={fb_icon}
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
                      src={linkedin_icon}
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
                    Office: 405, OFFBEAT CCU, 36/F, Topsia Rd, Topsia, Kolkata,
                    West Bengal 700039
                  </a>
                </li>
                <li>
                  <a href="#">Call US: 8583994561, 9230429404</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <p className="text-center" id="footer-copyright-text">
            <i className="far fa-copyright"></i> 2020 CollegeShala | All Rights
            Reserved
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
