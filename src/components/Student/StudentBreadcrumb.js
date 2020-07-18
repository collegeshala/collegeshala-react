import React from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { getToken } from "./../../js/auth";

class StudentBreadcrumb extends React.Component {
  state = {
    fullName: "",
  };

  async componentDidMount() {
    const token = await getToken();
    // console.log({ idToken: token });
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/studentdetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        /* console.log({ professorDetails: data.Item }); */
        const {
          fullName,
        } = data.Item;
        this.setState({
          fullName,
        });
        /* userDetails(); */
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container pt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/student-account">{this.state.fullName}</Link>
            </li>
            <li
              className="breadcrumb-item active"
              id="current-active"
              aria-current="page"
            >
              {this.props.breadcrumbs}
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default StudentBreadcrumb;
