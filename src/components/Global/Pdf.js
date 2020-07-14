import React, { useEffect } from "react";
import PDFViewer from "pdf-viewer-reactjs";

const Pdf = (props) => {
  const { noteUrl } = props.location.state;
  // console.log(noteUrl);
  return (
    <PDFViewer
      scale={2}
      document={{
        url: noteUrl,
      }}
    />
  );
};

export default Pdf;
