import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class MyApp extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pdfLink: this.props.location.state.noteUrl,
    previewOnly: this.props.location.state.previewOnly,
    scale: 0.5,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onDocumentLoadFailure = (err) => console.error(err);

  onNext = (event) => {
    event.preventDefault();
    const { pageNumber, numPages, previewOnly } = this.state;
    // console.log(previewOnly);
    if (previewOnly) {
      if (pageNumber < 2 && pageNumber < numPages) {
        this.setState({ pageNumber: pageNumber + 1 });
      }
    } else if (pageNumber < numPages) {
      this.setState({ pageNumber: pageNumber + 1 });
    }
  };

  onPrevious = (event) => {
    event.preventDefault();
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState({ pageNumber: pageNumber - 1 });
    }
  };

  scaleMinus = (event) => {
    event.preventDefault();
    const { scale } = this.state;
    if (scale > 0.5) {
      this.setState({ scale: scale - 0.5 });
    }
  };

  scalePlus = (event) => {
    event.preventDefault();
    const { scale } = this.state;
    if (scale < 5) {
      this.setState({ scale: scale + 0.5 });
    }
  };

  render() {
    const { pageNumber, numPages, scale } = this.state;

    return (
      <div>
        <Navbar />
        <div
          className="pdf-viewer"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <div>
            <h3 className="display-4">Page Controls</h3>
            <button className="pdf-buttons" onClick={this.onNext}>
              Next
            </button>{" "}
            <button className="pdf-buttons" onClick={this.onPrevious}>
              Previous
            </button>
          </div>
          <div>
            <button className="pdf-buttons" onClick={this.scaleMinus}>
              <i className="fas fa-search-minus"></i>
            </button>{" "}
            <button className="pdf-buttons" onClick={this.scalePlus}>
              <i className="fas fa-search-plus"></i>
            </button>
          </div>
          <p className="page-status">
            Page {pageNumber} of {numPages}
          </p>
          <div className="pdf-content">
            <Document
              file={this.state.pdfLink}
              onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
              onLoadError={this.onDocumentLoadFailure}
              loading={<Loader />}
              // loading={<div>Loading</div>}
            >
              <Page
                className="pdf-renderer"
                pageNumber={pageNumber}
                scale={scale}
              />
            </Document>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MyApp;
