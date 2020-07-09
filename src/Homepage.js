/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

import Footer from "./components/Global/Footer";

class Index extends React.Component {
  state = {
    email: "",
  };

  handleEmail(email) {
    this.setState({ email });
  }

  subscribe() {
    const { email } = this.state;
    let re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    if (email.match(re)) {
      // console.log(email);
      axios({
        method: "POST",
        url: "https://api.collegeshala.com/subscribenewsletter",
        data: JSON.stringify({ email }),
      })
        .then((res) => {
          console.log(res.status);
          alert("You have been subscribed successfully to our newsletter!");
          this.handleEmail("");
        })
        .catch((err) => {
          console.error(err);
          alert(
            "Oops! Seems like there was an error! Please try again later :-/"
          );
        });
    } else {
      alert("Please enter a valid email!");
      this.handleEmail("");
    }
  }

  render() {
    return (
      <div>
        <div id="home">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={require("./assets/img/logo.png")} id="logo" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <div className="mr-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a
                    className="nav-link scroll index-nav-link"
                    href="#services"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <span id="nav-font">Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link scroll index-nav-link"
                    href="#talkshala"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <span id="nav-font">TalkShala</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link index-nav-link"
                    id="nav-sign-up"
                    href=""
                    data-target=".navbar-collapse.show"
                    onClick={() => navigate("/register")}
                  >
                    <span id="nav-font">Sign Up</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link index-nav-link"
                    // onclick="goToURL(); return false;"
                    target="_blank"
                    id="nav-user-icon"
                    href=""
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <span id="nav-font">
                      <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <h1 className="above-search-bar-text">
              It's a <span id="custom-purple">Student</span>
              <span id="custom-red">'</span>
              <span id="custom-purple">s</span>
              Thing!
            </h1>
            <h2 className="text-center tagline-text">
              Get your college notes and more from the best educators
            </h2>
            <p className="text-center seach-box">
              <input
                type="text"
                id="search-input"
                placeholder="Search your subject here "
              />
            </p>
          </div>
        </div>

        <div className="services" id="services">
          <div className="container pill-container">
            <div className="text-center">
              <button className="pill-button"></button>
            </div>
          </div>
          <h1 className="text-center m-5 services-heading">
            What does <span id="custom-purple">College</span>
            <span id="custom-red">Shala</span> provide you with?
          </h1>
          <div className="card-deck m-5">
            <div className="card">
              <a
                // onClick="userindexredirect(); return false;"
                href="#"
              >
                <p className="text-center">
                  <img
                    className="card-img-top services-image"
                    src={require("./assets/img/study-materials-png.png")}
                    alt="materials"
                  />
                </p>
              </a>
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title text-center" id="custom-purple">
                    Study Materials
                  </h5>
                </a>
                <p className="card-text text-center"></p>
              </div>
            </div>
            <div className="card">
              <a href="/coming-soon.html">
                <p className="text-center">
                  <img
                    className="card-img-top services-image"
                    src={require("./assets/img/question-answers-png.png")}
                    alt="QnA"
                    width="80"
                  />
                </p>
              </a>
              <div className="card-body">
                <a href="/coming-soon.html">
                  <h5 className="card-title text-center" id="custom-purple">
                    Question/Answers
                  </h5>
                </a>
                <p className="card-text text-center"></p>
              </div>
            </div>
            <div className="card">
              <a href="/coming-soon.html">
                <p className="text-center">
                  <img
                    className="card-img-top services-image"
                    src={require("./assets/img/sell-books-png.png")}
                    alt="Books"
                  />
                </p>
              </a>
              <div className="card-body">
                <a href="/coming-soon.html">
                  <h5 className="card-title text-center" id="custom-purple">
                    Sell/Buy Books
                  </h5>
                </a>
                <p className="card-text text-center"></p>
              </div>
            </div>
          </div>

          <p className="text-center m-1">
            <a
              className="btn btn-primary"
              id="signup"
              href="#"
              role="button"
              onClick={() => navigate("/login")}
            >
              Sign Up
            </a>
          </p>
        </div>

        <div className="talkshala" id="talkshala">
          <div className="pill-container">
            <p className="text-center">
              <button className="pill-button"></button>
            </p>
          </div>
          <div className="container mt-5">
            <h1 className="text-center p-4 talkshala-h1">
              <span id="custom-purple">Talk</span>
              <span id="custom-red">Shala</span> - A Community
            </h1>
            <div className="talkshala-description">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="talkshala-card">
                      <p className="talkshala-p">
                        <img
                          src={require("./assets/img/talkshala/connect-with-seniors.png")}
                          className="talkshala-icons"
                          alt=""
                        />
                        <br />
                        <span id="talkshala-heading">CONNECT WITH SENIORS</span>
                        <br />
                        <span id="talkshala-text">Connect With Seniors</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="talkshala-p">
                      <img
                        src={require("./assets/img/talkshala/connect-with-peers.png")}
                        className="talkshala-icons"
                        alt=""
                      />
                      <br />
                      <span id="talkshala-heading">CONNECT WITH PEERS</span>
                      <br />
                      <span id="talkshala-text">Connect with peers</span>
                    </p>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-12 col-md-6">
                    <p className="talkshala-p">
                      <img
                        src={require("./assets/img/talkshala/perks-of-community.png")}
                        className="talkshala-icons"
                        alt=""
                      />
                      <br />
                      <span id="talkshala-heading">PERKS OF COMMUNITY</span>
                      <br />
                      <span id="talkshala-text">Perks of Community</span>
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="talkshala-p">
                      <img
                        src={require("./assets/img/talkshala/share-resources.png")}
                        className="talkshala-icons"
                        alt=""
                      />
                      <br />
                      <span id="talkshala-heading">SHARE RESOURCES</span>
                      <br />
                      <span id="talkshala-text">Share Resources</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="join-area">
              <p className="text-center m-2">
                <a
                  className="btn"
                  id="join-btn"
                  href="/coming-soon.html"
                  role="button"
                >
                  Join the community
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="newsletter">
          <div className="newsletter-top-img"></div>
          <div className="container newsletter-text">
            <h1 className="text-center">
              Stay upto-date <br />
              Subscribe to our <span id="custom-purple">Newsletter</span>
              <span id="custom-red">!</span>
            </h1>
            <br />
            <p className="text-center">
              <input
                type="email"
                id="sub-email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={(e) => this.handleEmail(e.target.value)}
              />
              <input
                type="button"
                id="newsletter-btn"
                onClick={this.subscribe.bind(this)}
                value="Subscribe"
              />
            </p>
          </div>
          <div className="newletter-below-img"></div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }
}

export default Index;
