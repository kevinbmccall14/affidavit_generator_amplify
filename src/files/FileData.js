import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import './FileData.css';
import FileText from './FileText';
import FileFields from './FileFields';
import FileTables from './FileTables';

const getFile = `query getFile($id: ID!) {
  getFile(id: $id) {
    id
    pages {
      lines {
        text
        confidence
      }
      fields {
        key
        value
      }
    }
  }
}`;

const FileData = ({ url, page }) => {
  const [fileData, setFile] = useState({
    pages: [
      {
        lines: [],
        tables: [],
        fields: [],
      },
    ],
  });
  const [view, setView] = useState('Text');

  console.log('Displaying file page', page - 1);

  useEffect(() => {
    async function fetchFile() {
      const data = await API.graphql(
        graphqlOperation(getFile, {
          id: url,
        }),
      );
      setFile(data.data.getFile);
    }
    fetchFile();
  }, []);

  return (
    <section className="FileData-container">
      <nav>
        <ul>
          <li>
            <a href="#Text" onClick={() => setView('Text')}>
              Text
            </a>
            <a href="#Tables" onClick={() => setView('Tables')}>
              Tables
            </a>
            <a href="#Fields" onClick={() => setView('Fields')}>
              Fields
            </a>
          </li>
        </ul>
      </nav>
      <section>
        {view === 'Text' && fileData.pages && (
          <FileText lines={fileData.pages[page - 1].lines} />
        )}
        {view === 'Tables' && fileData.pages && (
          <FileTables data={fileData.pages[page - 1].tables} />
        )}
        {view === 'Fields' && fileData.pages && (
          <FileFields data={fileData.pages[page - 1].fields} />
        )}
      </section>
    </section>
  );
};

export default FileData;
