import React from "react";
import "./../../assets/css/loader.css";

class Loader extends React.Component {
  componentDidMount() {
    try {
      const el = document.getElementById("global-footer");
      el.classList.toggle("isLoading");
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    try {
      const el = document.getElementById("global-footer");
      el.classList.toggle("isLoading");
    } catch (error) {
      console.error(error);
    }
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
