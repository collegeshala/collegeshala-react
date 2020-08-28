/* eslint-disable no-unused-expressions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import SecondaryNav from "../Global/SecondaryNav";
import Loader from "./../Global/Loader";
import StudentBreadcrumb from "./StudentBreadcrumb";

// import token from "./api_key";
import { getToken } from "./../../js/auth";

const StudentMaterials = () => {
  return (
    <Fragment>
      <Navbar />
      <StudentBreadcrumb breadcrumbs={"Purchased Notes"} />
      <SecondaryNav />
      <Materials />
      <Footer />
    </Fragment>
  );
};

class Materials extends React.Component {
  state = {
    notes: [],
    isLoading: true,
  };

  async componentDidMount() {
    const token = await getToken();
    // console.log({ token });
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/getnotes",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        console.log({ data });
        if (!data.error) {
          this.setState({ notes: data, isLoading: false });
        } else {
          // console.log(data.error);
          this.setState({ isLoading: false });
        }
      })
      .catch((err) => console.error(err.response));
  }

  render() {
    return (
      <div className="container student-dashboard-material">
        {!this.state.isLoading ? (
          <Fragment>
            <div className="row notes">
              {
                // eslint-disable-next-line eqeqeq
                this.state.notes.length === 0 ? (
                  <h2 className="text-muted text-center">
                    {/* <br />
                    No notes to display */}
                    "Welcome friend, search for your subject to get the notes. " <br />
                    "Also if you don't find what you are looking for then reach out to us via chatbot. "
                  </h2>
                ) : (
                  this.state.notes.map((note, index) => {
                    return (
                      <div
                        className="col-121 col-md-4"
                        key={note.noteId + index}
                      >
                        <div className="card mt-5" id="card">
                          <img
                            className="card-img-top img-fluid"
                            src="https://collegeshala-assets.s3.ap-south-1.amazonaws.com/notes-thumbnail.png"
                            alt="my materials"
                          />
                          <div className="card-body">
                            <h4 className="card-title">{note.chaptername}</h4>
                            <h5 className="professor">
                              By {note.professorname}
                            </h5>
                            {/* <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p> */}
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                navigate("/pdf/" + note.noteId, {
                                  state: {
                                    noteUrl: note.noteurl,
                                    previewOnly: false,
                                  },
                                });
                              }}
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
            <nav
              aria-label="Page navigation example"
              className="text-center pt-4"
            >
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
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
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Fragment>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default StudentMaterials;
