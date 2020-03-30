import React, { useState, useEffect } from 'react';
import './CaseText.css';

const CaseText = ({ lines }) => (
  <section>
    {lines.map(line => (
      <span className="CaseText-text">{line.text}</span>
    ))}
  </section>
);

export default CaseText;
