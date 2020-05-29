/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import { Router, Link } from "@reach/router";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import SecondaryNav from "../Global/SecondaryNav";

import StudentAccount from "./Account";
import StudentMaterials from "./StudentMaterials";
import StudentTransactions from "./StudentTransactions";

const StudentDashboard = () => {
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
              <a href="#">
                <Link to="/student-account">Student's Name</Link>
              </a>
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
      <Router>
        <StudentAccount path="student-account" />
        <StudentMaterials path="student-materials" />
        <StudentTransactions path="student-transactions" />
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default StudentDashboard;
