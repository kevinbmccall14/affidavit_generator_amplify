import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import './PDFView.css';

const PDFView = ({ url, onChangePage }) => {
  return (
    <section>
      <PDFViewer
        document={{
          url,
        }}
        css="PDFView-container"
        canvasCss="PDFView-canvas"
        onPrevBtnClick={onChangePage}
        onNextBtnClick={onChangePage}
      />
    </section>
  );
};

export default PDFView;
