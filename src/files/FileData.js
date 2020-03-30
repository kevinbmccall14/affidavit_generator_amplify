import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import './FileData.css';
import FileText from './FileText';

const getFile = `query GetFile($id: ID!) {
  getFile(id: $id) {
    id
    url
    pages {
      lines {
        text
        confidence
      }
    }
  }
}`;

function FileData() {
  const [fileData, setFile] = useState({});
  const [view, setView] = useState('Text');

  useEffect(() => {
    async function fetchFile() {
      const data = await API.graphql(
        graphqlOperation(getFile, {
          id: '3dc4009d-7e9d-4b7c-ac59-eecb5e6446fb',
        }),
      );
      setFile(data.data.getFile);
    }
    fetchFile();
  }, [fileData]);

  return (
    <section className="FileData-container">
      <nav>
        <ul>
          <li>
            <a href="#Text">Text</a>
            <a href="#Tables">Tables</a>
            <a href="#Fields">Fields</a>
          </li>
        </ul>
      </nav>
      <section>
        {fileData && fileData.id && (
          <FileText lines={fileData.pages[0].lines} />
        )}
      </section>
    </section>
  );
}

export default FileData;
