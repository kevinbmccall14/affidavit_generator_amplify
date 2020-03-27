import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import './PDFView.css';

const PDFView = url => {
  return (
    <PDFViewer
      document={{
        url,
      }}
      css="PDFView-container"
      canvasCss="PDFView-canvas"
    />
  );
};

export default PDFView;
