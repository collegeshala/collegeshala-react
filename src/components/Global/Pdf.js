import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class MyApp extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pdfLink: this.props.location.state.noteUrl,
    previewOnly: this.props.location.state.previewOnly,
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

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <button onClick={this.onNext}>Next</button>{" "}
        <button onClick={this.onPrevious}>Previous</button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Document
          file={this.state.pdfLink}
          onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
          onLoadError={this.onDocumentLoadFailure}
          onItemClick={() => this.setState({ pageNumber: 4 })}
          loading={<div>Loading</div>}
        >
          <Page scale={2} pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default MyApp;
