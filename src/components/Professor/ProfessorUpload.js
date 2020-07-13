/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import ProfessorNav from "../Global/ProfessorNav";
import ProfessorBreadcrumb from "../Professor/ProfessorBreadcrumb";
import Loader from "./../Global/Loader";

import UploadModal from "./UploadModal";

import { getToken, signout } from "./../../js/auth";

const ProfessorUpload = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProfessorBreadcrumb breadcrumbs={"Your Uploaded Notes"} />
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
    myUploads: "",
    phoneNo: "",
    original: {},
    isLoading: true,
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
        /* console.log({ professorDetails: data.Item }); */
        const {
          fullName,
          email,
          college,
          university,
          myUploads,
          phoneNo,
        } = data.Item;
        this.setState({
          fullName,
          email,
          college,
          university,
          myUploads,
          phoneNo,
          isLoading: false,
        });
        /* console.log(fullName); */
        /* console.log(myUploads.map((note) => note.subjectname)); */
        this.setData();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div>
        {/* Teacher Upload Button Open div */}
        <UploadModal updateFunc={this.componentDidMount.bind(this)} />
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
        <div className="container student-dashboard-material">
          <div className="row" id="myuploadsrow">
            {
              // eslint-disable-next-line eqeqeq
              this.state.myUploads.length === 0 ? (
                <h2>
                  <br />
                  No notes to display
                </h2>
              ) : (
                this.state.myUploads.map((note, index) => {
                  return (
                    <div className="col-12 col-md-4" key={note.noteId}>
                      <div className="card" id="card">
                        <img
                          className="card-img-top img-fluid"
                          src="https://www.nicepng.com/png/detail/76-767861_image-free-library-note-clipart-pen-and-paper.png"
                          alt="my materials"
                        />
                        <div className="card-body">
                          <h4 className="card-title">{note.chaptername}</h4>
                          <h5 className="professor">
                            By {this.state.fullName}
                          </h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button
                            // onClick="viewNote()"
                            className="btn btn-primary"
                            value={note.noteId}
                          >
                            Read
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )
            }
          </div>
        </div>
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
