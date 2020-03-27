import React, { useReducer } from 'react';
import './App.css';
import Upload from './Upload';
import PDFView from './PDFView';

const START_CASE = 'START_CASE';

const initialState =
  JSON.parse(localStorage.getItem('localState')) || {};

const reducer = (state, action) => {
  switch (action.type) {
    case START_CASE:
      const newState = { ...state, newCase: action.case };
      localStorage.setItem('localState', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="App-nav"></nav>
      {state.newCase ? (
        <section className="App-split-view">
          <PDFView url={state.newCase.fileUrl} />
        </section>
      ) : (
        <Upload
          onUpload={url => {
            dispatch({
              type: START_CASE,
              case: {
                fileUrl: url,
              },
            });
          }}
        />
      )}
    </div>
  );
}

export default App;
