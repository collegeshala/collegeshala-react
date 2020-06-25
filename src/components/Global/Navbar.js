import React from "react";
import { navigate, Link } from "@reach/router";
import logo from "./../../assets/img/logo.png";

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav className="navbar custom-nav navbar-expand-lg navbar-light bg-custom-blur">
        <a className="navbar-brand" href="/">
          <img src={logo} id="logo" alt="logo" />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <p className="nav-seach-box">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search your subject here "
                />
              </p>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link navbar-talkshala" href="/coming-soon.html">
                TalkShala
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              {/* <a className="nav-link" href="/cart.html">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-account.html">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
