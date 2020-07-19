/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import main_logo from "./../../assets/img/logo.png";

import { getToken } from "./../../js/auth";
import { isLoggedIn } from "./../../js/auth";
import { parseJwt } from "./../../js/auth";
import { signout } from "./../../js/auth";
import { Link } from "@reach/router";

const AnonymousNav = (props) => (
  <div>
    <nav className="navbar custom-nav navbar-expand-lg navbar-light bg-custom-blur">
      <Link className="navbar-brand" to="/">
        <img src={main_logo} id="logo" alt="" />
      </Link>
      {/* <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-user-circle"></span>
      </button> */}
      <div id="navbarText">
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
            <Link className="nav-link navbar-talkshala" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item" id="large-screen-search-box">
            <Link className="nav-link navbar-talkshala" to="/coming-soon">
              TalkShala
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="./cart.html">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>
          </li> */}
          {/* <li className="nav-item" id="large-screen-search-box">
                <Link className="nav-link" to="#">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </Link>
              </li> */}
        </ul>
      </div>
    </nav>

    <div className="container mb-3" id="small-screen-search-box">
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
      <Link className="navbar-brand" to="/">
        <img src={main_logo} id="logo" alt="" />
      </Link>
      <button
        className="navbar-toggler ml-auto"
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
            <Link className="nav-link navbar-talkshala" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item" id="large-screen-search-box">
            <Link className="nav-link navbar-talkshala" to="/coming-soon">
              TalkShala
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="fa fa-shopping-cart pl-4" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="nav-item dropdown" id="large-screen-search-box">
            <Link
              className="nav-link"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/student-account">
                My Account
              </Link>
              <Link className="dropdown-item" to="/student-materials">
                My Materials
              </Link>
              <Link className="dropdown-item" to="/student-transactions">
                My Transactions
              </Link>
              <Link className="dropdown-item" to="/coming-soon">
                Q/A Forum
              </Link>
              <a className="dropdown-item" href="" onClick={props.logout}>
                Log Out
              </a>
            </div>
          </li>
          <li className="nav-item" id="small-screen-search-box">
            <Link className="dropdown-item" to="/student-account">
              My Account
            </Link>
            <Link className="dropdown-item" to="/student-materials">
              My Materials
            </Link>
            <Link className="dropdown-item" to="/student-transactions">
              My Transactions
            </Link>
            <Link className="dropdown-item" to="/coming-soon">
              Q/A Forum
            </Link>
            <a className="dropdown-item" href="" onClick={props.logout}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mb-3" id="small-screen-search-box">
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
      <Link className="navbar-brand" to="/">
        <img src={main_logo} id="logo" alt="" />
      </Link>
      <button
        className="navbar-toggler ml-auto"
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
            <Link className="nav-link navbar-talkshala" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item" id="large-screen-search-box">
            <Link className="nav-link navbar-talkshala" to="/coming-soon">
              TalkShala
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="./cart.html">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>
          </li> */}
          <li className="nav-item dropdown" id="large-screen-search-box">
            <Link
              className="nav-link"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/professor-account">
                My Account
              </Link>
              <Link className="dropdown-item" to="/professor-upload">
                My Uploads
              </Link>
              <Link className="dropdown-item" to="/professor-earnings">
                My Earnings
              </Link>
              <Link className="dropdown-item" to="/coming-soon">
                Q/A Forum
              </Link>
              <a className="dropdown-item" href="" onClick={props.logout}>
                Log Out
              </a>
            </div>
          </li>
          <li className="nav-item" id="small-screen-search-box">
            <Link className="dropdown-item" to="/professor-account">
              My Account
            </Link>
            <Link className="dropdown-item" to="/professor-upload">
              My Uploads
            </Link>
            <Link className="dropdown-item" to="/professor-earnings">
              My Earnings
            </Link>
            <Link className="dropdown-item" to="/coming-soon">
              Q/A Forum
            </Link>
            <a className="dropdown-item" href="" onClick={props.logout}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mb-3" id="small-screen-search-box">
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
    this.logout = this.logout.bind(this);
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

  logout() {
    signout();
    navigate("/login");
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
      <TeacherNav
        search={this.search}
        check={this.onenter}
        logout={this.logout}
      />
    ) : (
      <StudentNav
        search={this.search}
        check={this.onenter}
        logout={this.logout}
      />
    );
  }
}

export default Navbar;
