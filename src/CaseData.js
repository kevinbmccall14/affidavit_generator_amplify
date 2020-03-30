import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import './CaseData.css';
import CaseText from './CaseText';

const getCase = `query GetCase($id: ID!) {
  getCase(id: $id) {
    id
    aaa
    pages {
      lines {
        text
        confidence
      }
    }
  }
}`;

function CaseData() {
  const [caseData, setCase] = useState({});
  const [view, setView] = useState('Text');

  useEffect(() => {
    async function fetchCase() {
      const data = await API.graphql(
        graphqlOperation(getCase, {
          id: '5451cf4a-14ed-484c-bba5-1abbf2282f6f',
        }),
      );
      setCase(data.data.getCase);
    }
    fetchCase();
  }, [caseData]);

  return (
    <section className="CaseData-container">
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
        {caseData.id && <CaseText lines={caseData.pages[0].lines} />}
      </section>
    </section>
  );
}

export default CaseData;
