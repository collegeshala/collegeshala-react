import React, { Component } from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from 'axios';

const NoteCard = (props) => (
  <div className="row notes-info-tab">
    <div className="col-12 col-md-2"><img width="85" height="85" src="./assets/images/pdf_logo.svg"
        className="all-prod-img rounded float-left" alt="..." /></div>
      <div className="col-12 col-md-8">
        <a id="to-pdf" href="/single-product.html?noteId=${note.noteId}">
          <h5>
            <span id="custom-purple">${props.note.chaptername}</span> - 
                  ${props.note.subjectname}
          </h5>
        </a>
        <div className="float-left mt-1">
          <h5><i className="fas fa-user-circle"></i>By Prof. ${props.note.professorname}</h5>
        </div>
        <div className="float-left mt-1 pl-3">
          <h5><i className="fas fa-graduation-cap"></i>${props.note.universityname}</h5>
        </div>
      </div>
      <div className="col-12 col-md-2 mt-3">
        <h4>&#8377; ${props.note.requiredCredits * 10}</h4>
      </div>
  </div>
)

class AllProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: ["chaptername", "subjectname", "universityname"],
      value: "",
      notes: [],
      notFound: ""
    }
  }

  async componentDidMount() {
      this.setState({
        value: localStorage.getItem("value")
      })

      const noteIds = new Set();

      for (let i = 0; i < 3; i++) {
        var config = {
          method: 'POST',
          url: "https://api.collegeshala.com/searchnotes",
          data: JSON.stringify({
            key: this.state.keys[i],
            value: this.state.value
          }),
          headers: {}
        }
        let resp = (await axios(config)).data;
        
        if (!resp.message) {
          resp.forEach(note => {
            let parsed_note = {};
            for (let x in note) {
              parsed_note[x] = note[x].S || note[x].N || note[x].BOOL
            }
            if (!noteIds.has(parsed_note.noteId)) {
              noteIds.add(parsed_note.noteId);
              this.state.notes.push(parsed_note);
            }
          });
        } else {
          continue;
        }
      }
      if (this.state.notes.length == 0) {
        this.setState({
          notFound: "No results found"
        });
        console.log("No results found");
      } else {
        console.log("h");
      }
  }

  render() {
    const { notes, notFound } = this.state;
    return (
      <div>
        <Navbar />
        <div class="container pt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          All Product
        </li>
      </ol>
    </nav>
  </div>

  <div class="container pt-1">
    <p class="results-found">
    <span id="custom-red">{notes.length}</span> Result(s) found
    </p>
  </div>
  <div class="container notes-container">
    <h1 class="text-center mt-5 mb-5" id="custom-red no-notes">{notFound}</h1>
    {notes.map(note => (
      <NoteCard note={note} />
    ))}
  </div>
  <Footer />
      </div>
    )
  }
}

export default AllProduct;