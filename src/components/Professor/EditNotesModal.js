import React, { useState, useEffect } from "react";
import axios from "axios";

/* import upload from "./../../js/upload"; */
import { getToken } from "./../../js/auth";

// class EditNotesModal extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }
//   async componentDidMount() {
//     const token = await getToken();
//     // console.log({ idToken: token });

//     axios({
//       method: "POST",
//       url: "https://api.collegeshala.com/getnotebyid/",
//       headers: {
//         authorization: token,
//       },
//       data: JSON.stringify({
//         noteId: this.props.selectedNote,
//       }),
//     })
//       .then(({ data }) => {
//         console.log(data.Item);
//         alert("Details updated successfully!");
//         /* this.componentDidMount(); */
//       })
//       .catch((err) => console.error(err));
//   }
//   render() {
//     console.log("hi");
//     return (
//       <div>
//         <h1>Richard</h1>
//       </div>
//     );
//   }
// }

const EditNotesModal = ({ selectedNote }) => {
  /* console.log(selectedNote); */
  const [item, setItem] = useState([]);

  useEffect(() => {
    const token = getToken();
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/getnotebyid",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({
        noteId: selectedNote,
      }),
    })
      .then((response) => {
        /* console.log({ item: response.data.Item }); */
        setItem(response.data.Item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(item);
  return (
    /*  Modal  */
    <div
      className="modal fade"
      id="editNotesModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editNotesModalEdit"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editNotesModalEdit">
              Edit Your Note
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="subjectName">Subject name</label>
                <input
                  type="text"
                  className="form-control"
                  id="subjectName"
                  aria-describedby="subjectnamehelp"
                  placeholder={item.subjectname}
                  value={item.subjectname}
                  onChange={(e) => e.target.value}
                />
                <small id="subjectnamehelp" className="form-text text-muted">
                  Change the Subject Name
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="chapterName">Chapter name</label>
                <input
                  type="text"
                  className="form-control"
                  id="chapterName"
                  aria-describedby="chapternamehelp"
                  placeholder={item.chaptername}
                />
                <small id="chapternamehelp" className="form-text text-muted">
                  Change the Chapter Name
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="semestertName">Semester Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="semesterName"
                  aria-describedby="semesternamehelp"
                  placeholder={item.sem}
                />
                <small id="subjectnamehelp" className="form-text text-muted">
                  Change the Semester Number
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="subjectName">University name</label>
                <input
                  type="text"
                  className="form-control"
                  id="universityName"
                  aria-describedby="universitynamehelp"
                  placeholder={item.universityname}
                />
                <small id="subjectnamehelp" className="form-text text-muted">
                  Change the University Name
                </small>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNotesModal;
