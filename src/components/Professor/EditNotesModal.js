import React, { useState } from "react";
/* import axios from "axios";

/* import upload from "./../../js/upload"; */
import { getToken } from "./../../js/auth";

const EditNotesModal = () => {
  return (
    /*  Modal  */
    <div
      class="modal fade"
      id="editNotesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editNotesModalEdit"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editNotesModalEdit">
              Edit Your Note
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="subjectName">Subject name</label>
                <input
                  type="text"
                  className="form-control"
                  id="subjectName"
                  aria-describedby="subjectnamehelp"
                  placeholder="Enter Subject Name"
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
                  placeholder="Enter Chapter Name"
                />
                <small id="chapternamehelp" className="form-text text-muted">
                  Change the Chapter Name
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="semestertName">Semester name</label>
                <input
                  type="text"
                  className="form-control"
                  id="semesterName"
                  aria-describedby="semesternamehelp"
                  placeholder="Enter Semester Name"
                />
                <small id="subjectnamehelp" className="form-text text-muted">
                  Change the Semester Name
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="subjectName">University name</label>
                <input
                  type="text"
                  className="form-control"
                  id="universityName"
                  aria-describedby="universitynamehelp"
                  placeholder="Enter University Name"
                />
                <small id="subjectnamehelp" className="form-text text-muted">
                  Change the University Name
                </small>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNotesModal;
