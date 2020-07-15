import React, { Component } from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";

class ComingSoon extends Component {
  render() {
    return (
      <div width="device-width">
        <div id="home">
        <Navbar />
          <div className="container">
            <h1 className="text-center coming-soon-heading">
              <span id="custom-purple">Coming</span>
              <span id="custom-red">Soon</span>
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ComingSoon;