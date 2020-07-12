import React, { Component } from "react";
import { navigate } from "@reach/router";
import main_logo from "./../../assets/img/logo.png";

import { getToken } from "./../../js/auth";
import { isLoggedIn } from "./../../js/auth";
import { parseJwt } from "./../../js/auth";

const AnonymousNav = (props) => (
  <div>
    <nav className="navbar custom-nav navbar-expand-lg navbar-light bg-custom-blur">
      <a className="navbar-brand" href="/">
        <img src={main_logo} id="logo" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-user-circle"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto" id="large-screen-search-box">
          <li className="nav-item">
            <p className="nav-seach-box">
              <input
                type="text"
                id="search-input"
                placeholder="Search your subject here "
                onChange={props.search}
                onKeyPress={props.check}
              />
            </p>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" id="large-screen-search-box">
            <a className="nav-link navbar-talkshala" href="./coming-soon.html">
              TalkShala
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./cart.html">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </li>
          {/* <li className="nav-item" id="large-screen-search-box">
                <a className="nav-link" href="#">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </a>
              </li> */}
        </ul>
      </div>
    </nav>

    <div className="container" id="small-screen-search-box">
      <div className="row">
        <div className="col">
          <div className="nav-seach-box">
            <input
              type="text"
              id="search-notes"
              placeholder="Search your subject here "
              onChange={props.search}
              onKeyPress={props.check}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StudentNav = (props) => (
  <div>
    <nav className="navbar custom-nav navbar-expand-lg navbar-light bg-custom-blur">
      <a className="navbar-brand" href="/">
        <img src={main_logo} id="logo" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-user-circle"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto" id="large-screen-search-box">
          <li className="nav-item">
            <p className="nav-seach-box">
              <input
                type="text"
                id="search-input"
                placeholder="Search your subject here "
                onChange={props.search}
                onKeyPress={props.check}
              />
            </p>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" id="large-screen-search-box">
            <a className="nav-link navbar-talkshala" href="./coming-soon.html">
              TalkShala
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./cart.html">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item dropdown" id="large-screen-search-box">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="./my-account.html">
                My Account
              </a>
              <a className="dropdown-item" href="./student-dashboard.html">
                My Materials
              </a>
              <a className="dropdown-item" href="./my-transaction.html">
                My Transactions
              </a>
              <a className="dropdown-item" href="./coming-soon.html">
                Q/A Forum
              </a>
              <a className="dropdown-item" href="#">
                Log Out
              </a>
            </div>
          </li>
          <li className="nav-item" id="small-screen-search-box">
            <a className="dropdown-item" href="./my-account.html">
              My Account
            </a>
            <a className="dropdown-item" href="./student-dashboard.html">
              My Materials
            </a>
            <a className="dropdown-item" href="./my-transaction.html">
              My Transactions
            </a>
            <a className="dropdown-item" href="./coming-soon.html">
              Q/A Forum
            </a>
            <a className="dropdown-item" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container" id="small-screen-search-box">
      <div className="row">
        <div className="col">
          <div className="nav-seach-box">
            <input
              type="text"
              id="search-notes"
              placeholder="Search your subject here "
              onChange={props.search}
              onKeyPress={props.check}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeacherNav = (props) => (
  <div>
    <nav className="navbar custom-nav navbar-expand-lg navbar-light bg-custom-blur">
      <a className="navbar-brand" href="/">
        <img src={main_logo} id="logo" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-user-circle"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto" id="large-screen-search-box">
          <li className="nav-item">
            <p className="nav-seach-box">
              <input
                type="text"
                id="search-input"
                placeholder="Search your subject here "
                onChange={props.search}
                onKeyPress={props.check}
              />
            </p>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" id="large-screen-search-box">
            <a className="nav-link navbar-talkshala" href="./coming-soon.html">
              TalkShala
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./cart.html">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </li>
          <li className="nav-item dropdown" id="large-screen-search-box">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="./my-account.html">
                My Account
              </a>
              <a className="dropdown-item" href="./student-dashboard.html">
                My Uploads
              </a>
              <a className="dropdown-item" href="./my-transaction.html">
                My Earnings
              </a>
              <a className="dropdown-item" href="./coming-soon.html">
                Q/A Forum
              </a>
              <a className="dropdown-item" href="#">
                Log Out
              </a>
            </div>
          </li>
          <li className="nav-item" id="small-screen-search-box">
            <a className="dropdown-item" href="./my-account.html">
              My Account
            </a>
            <a className="dropdown-item" href="./student-dashboard.html">
              My Uploads
            </a>
            <a className="dropdown-item" href="./my-transaction.html">
              My Earnings
            </a>
            <a className="dropdown-item" href="./coming-soon.html">
              Q/A Forum
            </a>
            <a className="dropdown-item" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container" id="small-screen-search-box">
      <div className="row">
        <div className="col">
          <div className="nav-seach-box">
            <input
              type="text"
              id="search-notes"
              placeholder="Search your subject here "
              onChange={props.search}
              onKeyPress={props.check}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isProf: false,
    };

    this.search = this.search.bind(this);
    this.onenter = this.onenter.bind(this);
  }

  search(event) {
    localStorage.setItem("value", event.target.value);
  }

  onenter(event) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (code == 13) {
      if (window.location.href.endsWith("/all-product")) {
        this.props.searchFunc(localStorage.getItem("value"));
      } else {
        navigate("/all-product");
      }
      // window.location.pathname = "/all-product";
    }
  }

  async componentDidMount() {
    const checkLogin = await isLoggedIn();
    // console.log(checkLogin);
    let isProf = false,
      isLoading = true;

    if (checkLogin) {
      const token = await getToken();
      const obj = parseJwt(token);
      isProf = obj["custom:isProfessor"] == "true";
      isLoading = false;
    }

    this.setState({ isLoading, isProf });
    // console.log(this.state);
  }

  render() {
    return this.state.isLoading ? (
      <AnonymousNav search={this.search} check={this.onenter} />
    ) : this.state.isProf ? (
      <TeacherNav search={this.search} check={this.onenter} />
    ) : (
      <StudentNav search={this.search} check={this.onenter} />
    );
  }
}

export default Navbar;
