/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "./../Loader";

const NoteCard = ({ note }) => (
  <div className="row notes-info-tab">
    <div className="col-12 col-md-2">
      <img
        width="85"
        height="85"
        src="https://collegeshala-assets.s3.ap-south-1.amazonaws.com/notes-thumbnail.png"
        className="all-prod-img rounded float-left"
        alt="collegeshala all product image"
      />
    </div>
    <div className="col-12 col-md-8">
      <a
        href="#"
        id="to-pdf"
        onClick={(event) => {
          event.preventDefault();
          navigate("/single-product/" + note.noteId);
          // navigate("/single-product", { state: { note } });
        }}
      >
        <h5>
          <span id="custom-purple">{note.chaptername}</span> -{" "}
          {note.subjectname}
        </h5>
      </a>
      <div className="float-left mt-1 pr-3">
        <h5>
          <i className="fas fa-user-circle"></i> By {note.professorname}
        </h5>
      </div>
      <div className="float-left mt-1">
        <h5>
          <i className="fas fa-graduation-cap"></i> {note.universityname}
        </h5>
      </div>
    </div>
    <div className="col-12 col-md-2 mt-3">
      <h4>&#8377; {note.requiredCredits * 10}</h4>
    </div>
  </div>
);

class AllProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: ["chaptername", "subjectname", "universityname", "professorname"],
      value: "",
      notes: [],
      notFound: "",
      isLoading: true,
    };
  }

  async fetchResults(value) {
    this.setState({ isLoading: true });
    const params = ["chaptername", "subjectname", "universityname"];
    const notes = [];
    const noteIds = new Set();

    for (let i = 0; i < 4; i++) {
      const key = params[i];
      try {
        const resp = (
          await axios({
            method: "POST",
            url: "https://api.collegeshala.com/searchnotes",
            data: JSON.stringify({ key, value }),
          })
        ).data;
        // console.log(resp);

        if (!resp.message) {
          resp.forEach((note) => {
            let parsed_note = {};
            for (let x in note) {
              parsed_note[x] = note[x].S || note[x].N || note[x].BOOL;
            }
            if (!noteIds.has(parsed_note.noteId)) {
              noteIds.add(parsed_note.noteId);
              notes.push(parsed_note);
            }
          });
        } else {
          continue;
        }
      } catch (error) {
        console.error(error.response);
      }
    }

    this.setState({ notes, isLoading: false });
  }

  async componentDidMount() {
    const value = localStorage.getItem("value");
    this.fetchResults(value);
    this.setState({
      value,
    });
  }

  render() {
    const { notes, notFound } = this.state;
    return (
      <div>
        <Navbar searchFunc={this.fetchResults.bind(this)} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="container pt-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {this.state.value}
                  </li>
                </ol>
              </nav>
            </div>

            <div className="container pt-1">
              <p className="results-found">
                <span id="custom-red">{notes.length}</span> Result(s) found
              </p>
            </div>
            <div className="container notes-container">
              {this.state.notes.length == 0 ? (
                <h1 className="text-center mt-5 mb-5" id="custom-red no-notes">
                  {notFound}
                </h1>
              ) : (
                this.state.notes.map((note) => (
                  <NoteCard key={note.noteId} note={note} />
                ))
              )}
            </div>
          </Fragment>
        )}
        <Footer />
      </div>
    );
  }
}

export default AllProduct;
