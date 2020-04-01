import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import './FileData.css';
import FileText from './FileText';

const getFile = `query getFile($id: ID!) {
  getFile(id: $id) {
    id
    pages {
      lines {
        text
        confidence
      }
    }
  }
}`;

const FileData = ({ url }) => {
  const [fileData, setFile] = useState({});
  const [view, setView] = useState('Text');

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
            <a href="#Text">Text</a>
            <a href="#Tables">Tables</a>
            <a href="#Fields">Fields</a>
          </li>
        </ul>
      </nav>
      <section>
        {fileData && fileData.id && fileData.pages && (
          <FileText lines={fileData.pages[0].lines} />
        )}
      </section>
    </section>
  );
};

export default FileData;
