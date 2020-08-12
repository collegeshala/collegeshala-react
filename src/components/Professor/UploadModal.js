import React, { useState } from "react";
import axios from "axios";

import upload from "./../../js/upload";
import { getToken } from "./../../js/auth";

// const $ = window.$;

const UploadModal = ({ updateFunc }) => {
  const [file, setFile] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [sem, setSem] = useState("");
  const [university, setUniversity] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (file) {
      const token = await getToken();
      const fileDetails = {
        file,
        chaptername: chapter,
        subjectname: subject,
        universityname: university,
        sem,
      };
      setUploading(true);
      upload(fileDetails, addNote, changeStyle, token);
    } else {
      alert("Please enter a file first!");
    }
  };

  const clearForm = (close = false) => {
    setFile("");
    setSubject("");
    setChapter("");
    setSem("");
    setUniversity("");
    setProgress(0);
    setUploading(false);
    // if (close) {
    //   $("#exampleModal").modal("toggle");
    // }
  };

  const changeStyle = ({ loaded, total }) => {
    const percent = (loaded / total) * 100;
    setProgress(percent);
  };

  const addNote = (token, { noteId, noteurl }, fileDetails) => {
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/addnewnote",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({
        noteId,
        noteurl,
        ...fileDetails,
      }),
    })
      .then(() => {
        alert("Note uploaded successfully!");
        clearForm();
        updateFunc();
      })
      .catch((err) => {
        console.error(err.response);
        clearForm();
        alert("There was an error in added the notes :-/");
      });
  };

  return (
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
                      onChange={(e) => setFile(e.target.files[0])}
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
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
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
                      onChange={(e) => setChapter(e.target.value)}
                      value={chapter}
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
                      onChange={(e) => setSem(e.target.value)}
                      value={sem}
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
                      onChange={(e) => setUniversity(e.target.value)}
                      value={university}
                    />
                  </div>
                  {uploading ? (
                    <div
                      className="status"
                      style={{
                        border: "1px solid #dc3545",
                        backgroundColor: "#ffd7d7",
                        maxWidth: "100%",
                        height: "25px",
                        margin: "5px",
                      }}
                    >
                      <div
                        className="progress"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: "#00bbd8",
                          height: "25px",
                        }}
                      ></div>
                    </div>
                  ) : (
                    <button
                      onClick={handleUpload}
                      id="submi-notes-upload"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  )}
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
  );
};

export default UploadModal;
