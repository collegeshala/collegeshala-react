/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import ProfessorNav from "../Global/ProfessorNav";

import { getToken, signout } from "./../../js/auth";

const ProfessorAccount = () => {
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
              <Link to="/student-account">Professor's Name</Link>
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
      <ProfessorNav />
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
    const token = await getToken();

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
    const token = await getToken();
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
              <a href="javascript:void(0)" onclick="goToURL(); return false;">
                Log Out
              </a>
            </div>
            <form action="#" method="post">
              <div className="form-row mb-1">
                <div className="col">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="college">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="college"
                  aria-describedby="emailHelp"
                  placeholder="College Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dept">Department</label>
                <input
                  type="text"
                  className="form-control"
                  id="dept"
                  aria-describedby="emailHelp"
                  placeholder="Department"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subjects">Subjects</label>
                <input
                  type="text"
                  className="form-control"
                  id="subjects"
                  aria-describedby="emailHelp"
                  placeholder="Subjects"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNo"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                />
              </div>
              <button type="submit" className="btn btn-primary update-btn">
                Update
              </button>
              <button type="submit" className="btn btn-secondary">
                Discard Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessorAccount;
