import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
 
const Pdf = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://collegeshala-notes.s3.ap-south-1.amazonaws.com/03d872be-4d15-4543-b943-342258f08ea2.pdf',
            }}
        />
    )
}
 
export default Pdf;