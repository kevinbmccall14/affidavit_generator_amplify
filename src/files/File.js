import React from 'React';
import PDFView from './PDFView';
import FileData from './FileData';

export default ({ url, dispatch, page }) => (
  <section className="Explorer-split-view">
    <PDFView
      url={url}
      onChangePage={(page) =>
        dispatch({
          type: 'CHANGE_PAGE',
          page,
        })
      }
    />
    <FileData url={url} page={page} />
  </section>
);
