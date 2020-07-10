import React from "react";
import "./../../assets/css/loader.css";

class Loader extends React.Component {
  componentDidMount() {
    const el = document.getElementById("global-footer");
    el.classList.toggle("isLoading");
  }

  componentWillUnmount() {
    const el = document.getElementById("global-footer");
    el.classList.toggle("isLoading");
  }

  render() {
    return (
      <div className="loader-container">
        <div className="loading"></div>
      </div>
    );
  }
}

export default Loader;
