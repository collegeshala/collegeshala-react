/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import ProfessorNav from "../Global/ProfessorNav";
import ProfessorBreadcrumb from "../Professor/ProfessorBreadcrumb";

import { getToken, signout } from "./../../js/auth";

const ProfessorUpload = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/professor-account">Professor's Name</Link>
            </li>
            <li
              className="breadcrumb-item active"
              id="current-active"
              aria-current="page"
            >
              Notes Upload
            </li>
          </ol>
        </nav>
      </div>
      <ProfessorNav />
      <Upload />
      <Footer />
    </React.Fragment>
  );
};

class Upload extends React.Component {
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
    const token = await getToken();
    // console.log({ idToken: token });
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/professordetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        console.log("RIchard here");
        console.log({ professorDetails: data.Item });

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
          phoneNo,
        });
        console.log(fullName);
        this.setData();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        {/* Teacher Upload Button Open div */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Nav tabs */}
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#teacher-upload-notes-tab"
                    >
                      Upload Notes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#teacher-upload-sample-paper-tab"
                    >
                      Upload Sample Paper
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div
                    id="teacher-upload-notes-tab"
                    className="container tab-pane active"
                  >
                    <br />
                    <h3>Upload Notes</h3>
                    <form>
                      <div className="form-group">
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="inputfile"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-subject-name">
                          Subject Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="teacher-upload-subject-name"
                          aria-describedby="emailHelp"
                          placeholder="Enter subject name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-chapter-name">
                          Chapter Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="teacher-upload-chapter-name"
                          aria-describedby="emailHelp"
                          placeholder="Enter chapter name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-semester-number">
                          For which semester?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="teacher-upload-semester-number"
                          aria-describedby="emailHelp"
                          placeholder="Enter semester"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-university-name">
                          University Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="teacher-upload-university-name"
                          aria-describedby="emailHelp"
                          placeholder="Enter University name"
                        />
                      </div>
                      <button
                        onclick="handleUpload()"
                        id="submi-notes-upload"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div
                    id="teacher-upload-sample-paper-tab"
                    className="container tab-pane fade"
                  >
                    <br />
                    <h3>Upload Sample Paper</h3>
                    <form>
                      <div className="form-group">
                        <input
                          type="file"
                          name="file"
                          id="sample-paper-file"
                          className="inputfile"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-sample-paper-subject-name">
                          Subject Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="teacher-upload-sample-paper-subject-name"
                          aria-describedby="emailHelp"
                          placeholder="Enter subject name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-sample-paper-semester-number">
                          For which semester?
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="teacher-upload-sample-paper-semester-number"
                          aria-describedby="emailHelp"
                          placeholder="Enter semester"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="teacher-upload-sample-paper-university-name">
                          University Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="teacher-upload-sample-paper-university-name"
                          aria-describedby="emailHelp"
                          placeholder="Enter University name"
                        />
                      </div>
                      <button
                        type="submit"
                        id="submi-sample-paper-upload"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* display if notes uploaded successfully*/}
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className="toast"
          data-autohide="false"
        >
          <div className="toast-header">
            <img src="..." className="rounded mr-2" alt="..." />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <h1 className="teacher-dashboard-main-heading">
                Want to Upload a new note?
              </h1>
            </div>
            <div className="col-6 col-md-4">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn mt-2"
                id="teacher-upload-button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Upload Now →
              </button>
            </div>
          </div>
        </div>
        <h3 className="container mt-5">Previously Updated Notes</h3>
        <div className="container student-dashboard-material mt-3">
          <div id="myuploadsrow" className="row"></div>
          <nav
            aria-label="Page navigation example"
            className="text-center pt-4"
          >
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default ProfessorUpload;
