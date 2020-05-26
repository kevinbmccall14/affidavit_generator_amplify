import React from 'react';
import './FileFields.scss';

const FileFields = ({ data }) => (
  <section>
    <ul>
      {data.map(({ key, value }) => (
        <li className="FileFields-text">
          <span>{key}</span> : <span>{value}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default FileFields;
