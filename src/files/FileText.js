import React from 'react';
import './FileText.scss';

const FileText = ({ lines }) => (
  <section>
    {lines.map((line) => (
      <span className="FileText-text">{line.text}</span>
    ))}
  </section>
);

export default FileText;
