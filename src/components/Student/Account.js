/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";

import token from "./api_key";

class Account extends React.Component {
  state = {
    fullName: "",
    email: "",
    college: "",
    university: "",
    sem: 0,
    phoneNo: 0,
    original: {},
  };

  setData({ fullName, email, college, university, sem, phoneNo }) {
    this.setState({
      fullName,
      email,
      college,
      university,
      sem: sem.toString(),
      phoneNo: phoneNo.toString(),
    });

    const original = this.state;
    delete original.original;
    this.setState({ original });
  }

  discardChanges(event) {
    event.preventDefault();
    this.setData(this.state.original);
  }

  update(event) {
    event.preventDefault();
    const data = this.state;
    delete data.original;
    delete data.email;

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

  componentDidMount() {
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/studentdetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        console.log(data);
        this.setData(data.Item);
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
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  value={this.state.fullName}
                  aria-describedby="emailHelp"
                  placeholder="Enter Full Name"
                  onChange={(e) => this.setState({ fullName: e.target.value })}
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
                  onChange={(e) => this.setState({ college: e.target.value })}
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
                    this.setState({ university: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="semester">Semester</label>
                <select
                  id="semester"
                  className="form-control"
                  defaultValue={this.state.sem}
                  onChange={(e) =>
                    this.setState({ sem: Number(e.target.value) })
                  }
                >
                  <option selected={this.state.sem === 1} value="1">
                    First
                  </option>
                  <option selected={this.state.sem === 2} value="2">
                    Second
                  </option>
                  <option selected={this.state.sem === 3} value="3">
                    Third
                  </option>
                  <option selected={this.state.sem === 4} value="4">
                    Fourth
                  </option>
                  <option selected={this.state.sem === 5} value="5">
                    Fifth
                  </option>
                  <option value="6">Sixth</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNo"
                  value={this.state.phoneNo}
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  onChange={(e) => this.setState({ phoneNo: e.target.value })}
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

export default Account;
