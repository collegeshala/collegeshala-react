/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import Navbar from "./../Global/Navbar";
import Footer from './../Global/Footer'

class StudentAccount extends React.Component {
    state = {
        account_det: {},
        loading: false,
    };

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container student-account">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="container m-5">
                                <a
                                    href="javascript:void(0)"
                                    onclick="goToURL(); return false;"
                                >
                                    Log Out
                                </a>
                            </div>
                            <form action="#" method="post">
                                <div className="form-group">
                                    <label for="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullname"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Full Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="college">College Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="college"
                                        aria-describedby="emailHelp"
                                        placeholder="College Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="university">University</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        aria-describedby="emailHelp"
                                        placeholder="Degree Pursuing"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="semester">Semester</label>
                                    <select
                                        id="semester"
                                        className="form-control"
                                    >
                                        <option value="1">first</option>
                                        <option value="2">Second</option>
                                        <option value="3">Third</option>
                                        <option value="4">Fourth</option>
                                        <option value="5">Fifth</option>
                                        <option value="6">Sixth</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="phoneNo">Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phoneNo"
                                        aria-describedby="emailHelp"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="container pt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary update-btn"
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-secondary"
                                    >
                                        Discard Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default StudentAccount;
