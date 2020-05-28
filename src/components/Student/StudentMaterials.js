/* eslint-disable no-unused-expressions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class StudentMaterials extends React.Component {
  state = {
    notes: [
      {
        professoremail: "mujtababasheer14@gmail.com",
        noteId: "9a01fc31-df29-4e74-bf89-dbe83ac28bcc",
        noteurl:
          "https://collegeshala-notes.s3.ap-south-1.amazonaws.com/9a01fc31-df29-4e74-bf89-dbe83ac28bcc.pdf",
        requiredCredits: 2,
        chaptername: "Dummy Chapter",
        visibility: false,
        sem: "X",
        universityname: "NSIT",
        professorname: "Mujtaba Basheer",
        subjectname: "Dummy Subject",
      },
      {
        professoremail: "mujtababasheer14@gmail.com",
        noteId: "9a01fc31-df29-4e74-bf89-dbe83ac28bcc",
        noteurl:
          "https://collegeshala-notes.s3.ap-south-1.amazonaws.com/9a01fc31-df29-4e74-bf89-dbe83ac28bcc.pdf",
        requiredCredits: 2,
        chaptername: "Dummy Chapter",
        visibility: false,
        sem: "X",
        universityname: "NSIT",
        professorname: "Mujtaba Basheer",
        subjectname: "Dummy Subject",
      },
      {
        professoremail: "mujtababasheer14@gmail.com",
        noteId: "9a01fc31-df29-4e74-bf89-dbe83ac28bcc",
        noteurl:
          "https://collegeshala-notes.s3.ap-south-1.amazonaws.com/9a01fc31-df29-4e74-bf89-dbe83ac28bcc.pdf",
        requiredCredits: 2,
        chaptername: "Dummy Chapter",
        visibility: false,
        sem: "X",
        universityname: "NSIT",
        professorname: "Mujtaba Basheer",
        subjectname: "Dummy Subject",
      },
    ],
  };

  render() {
    return (
      <div className="container student-dashboard-material">
        <div className="row notes">
          {
            // eslint-disable-next-line eqeqeq
            this.state.notes == false ? (
              <h1>No notes to display</h1>
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
                          onClick="viewNote()"
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
