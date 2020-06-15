/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import SecondaryNav from "../Global/SecondaryNav";

import { getToken, signout } from "./../../js/auth";

const StudentAccount = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="spa.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/student-account">Student's Name</Link>
            </li>
            <li
              className="breadcrumb-item active"
              id="current-active"
              aria-current="page"
            >
              My Account
            </li>
          </ol>
        </nav>
      </div>
      <SecondaryNav />
      <Account />
      <Footer />
    </React.Fragment>
  );
};

class Account extends React.Component {
  state = {
    fullName: "",
    email: "",
    college: "",
    university: "",
    sem: "0",
    phoneNo: "",
    original: {},
  };

  setData() {
    const original = this.state;
    delete original.original;
    this.setState({ original });
  }

  discardChanges(event) {
    event.preventDefault();
    this.setData(this.state.original);
  }

  async update(event) {
    event.preventDefault();
    const data = this.state;
    delete data.original;
    delete data.email;
    const token = await getToken;
    // console.log({ idToken: token });

    axios({
      method: "POST",
      url: "https://api.collegeshala.com/updatestudentaccount",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({
        AccessToken: token,
        params: data,
      }),
    })
      .then(({ data }) => {
        console.log(data);
        alert("Details updated successfully!");
        this.componentDidMount();
      })
      .catch((err) => console.error(err));
  }

  logout() {
    signout();
    navigate("/login");
  }

  async componentDidMount() {
    const token = await getToken;
    // console.log({ idToken: token });
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/studentdetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        console.log({ studentDetails: data.Item });
        const {
          fullName,
          email,
          college,
          university,
          sem,
          phoneNo,
        } = data.Item;
        this.setState({
          fullName,
          email,
          college,
          university,
          sem: sem.toString(),
          phoneNo,
        });
        this.setData();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container student-account">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="container m-5">
              <a href="#" onClick={this.logout}>
                Log Out
              </a>
            </div>
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  value={this.state.fullName}
                  aria-describedby="emailHelp"
                  placeholder="Enter Full Name"
                  onChange={(e) =>
                    this.setState({
                      fullName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="college">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="college"
                  value={this.state.college}
                  aria-describedby="emailHelp"
                  placeholder="College Name"
                  onChange={(e) =>
                    this.setState({
                      college: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="university">University</label>
                <input
                  type="text"
                  className="form-control"
                  id="university"
                  value={this.state.university}
                  aria-describedby="emailHelp"
                  placeholder="Degree Pursuing"
                  onChange={(e) =>
                    this.setState({
                      university: e.target.value,
                    })
                  }
                />
              </div>
              {this.state.sem === "0" ? null : (
                <div className="form-group">
                  <label htmlFor="semester">Semester</label>
                  <select
                    id="semester"
                    className="form-control"
                    defaultValue={this.state.sem}
                    onChange={(e) => {
                      const sem = e.target.value;
                      console.log(sem);
                      this.setState({ sem });
                    }}
                  >
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Fourth</option>
                    <option value="5">Fifth</option>
                    <option value="6">Sixth</option>
                  </select>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNo"
                  value={this.state.phoneNo}
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  onChange={(e) =>
                    this.setState({
                      phoneNo: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container pt-3">
                <button
                  type="submit"
                  className="btn btn-primary update-btn"
                  onClick={(e) => this.update(e)}
                >
                  Update
                </button>
                <button
                  type="submit"
                  onClick={(e) => this.discardChanges(e)}
                  className="btn btn-secondary"
                >
                  Discard Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentAccount;
