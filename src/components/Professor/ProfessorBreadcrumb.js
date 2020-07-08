import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

class ProfessorBreadcrumb extends React.Component {
  state = {};

  render() {
    return (
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
    );
  }
}

export default ProfessorBreadcrumb;
