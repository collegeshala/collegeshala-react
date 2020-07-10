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
    phoneNo: "",
    original: {},
    dept: "",
    subjects: "",
  };

  setData() {
    const original = this.state;
    delete original.original;
    this.setState({ original });
  }

  discardChanges(event) {
    event.preventDefault();
    const { original } = this.state;
    this.setState({ ...original, original });
  }

  async update(event) {
    event.preventDefault();
    const data = this.state;
    delete data.original;
    delete data.email;
    delete data.phoneNo;
    const token = await getToken();

    axios({
      method: "POST",
      url: "https://api.collegeshala.com/updateprofessorsaccount",
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

    axios({
      method: "POST",
      url: "https://api.collegeshala.com/professordetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        const { email, college, dept, phoneNo, fullName, subjects } = data.Item;
        this.setState({
          email,
          college,
          dept,
          phoneNo,
          fullName,
          subjects,
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
              <a href="" onClick={this.logout}>
                Log Out
              </a>
            </div>
            <form action="#" method="post">
              <div className="form-row mb-1"></div>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Full Name"
                  value={this.state.fullName}
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
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={() => alert("You cannot change your email!")}
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
                  value={this.state.college}
                  onChange={(e) =>
                    this.setState({
                      college: e.target.value,
                    })
                  }
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
                  value={this.state.dept}
                  onChange={(e) =>
                    this.setState({
                      dept: e.target.value,
                    })
                  }
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
                  value={this.state.subjects}
                  onChange={(e) =>
                    this.setState({
                      subjects: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNo"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  value={this.state.phoneNo}
                  onChange={() => alert("You cannot change your phone number!")}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary update-btn"
                onClick={this.update.bind(this)}
              >
                Update
              </button>{" "}
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={this.discardChanges.bind(this)}
              >
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
