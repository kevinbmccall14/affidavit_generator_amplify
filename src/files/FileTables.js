import React from 'react';
import './FileTables.css';

const FileTables = ({ data }) => (
  <section>
    {/* {lines.map(line => (
      <span className="FileTables-text">{line.text}</span>
    ))} */}
    <p>{JSON.stringify(data)}</p>
  </section>
);

export default FileTables;
