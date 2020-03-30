import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import './PDFView.css';

const PDFView = url => {
  return (
    <section>
      <PDFViewer
        document={{
          url,
        }}
        css="PDFView-container"
        canvasCss="PDFView-canvas"
      />
    </section>
  );
};

export default PDFView;
