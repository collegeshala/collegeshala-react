/* eslint-disable no-unused-expressions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import SecondaryNav from "../Global/SecondaryNav";

// import token from "./api_key";
import { getToken } from "./../../js/auth";

const StudentMaterials = () => {
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
              My Materials
            </li>
          </ol>
        </nav>
      </div>
      <SecondaryNav />
      <Materials />
      <Footer />
    </React.Fragment>
  );
};

class Materials extends React.Component {
  state = {
    notes: [],
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
        if(!data.error) {
          this.setState({ notes: data });
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container student-dashboard-material">
        <div className="row notes">
          {
            // eslint-disable-next-line eqeqeq
            this.state.notes.length === 0 ? (
              <h2>
                <br />
                No notes to display
              </h2>
            ) : (
              this.state.notes.map((note, index) => {
                return (
                  <div className="col-121 col-md-4" key={note.noteId + index}>
                    <div className="card" id="card">
                      <img
                        className="card-img-top img-fluid"
                        src="https://via.placeholder.com/260x180"
                        alt="my materials"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{note.chaptername}</h4>
                        <h5 className="professor">By {note.professorname}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
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
        <nav aria-label="Page navigation example" className="text-center pt-4">
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
      </div>
    );
  }
}

export default StudentMaterials;
