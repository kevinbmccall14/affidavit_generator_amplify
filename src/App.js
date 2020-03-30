import React, { useReducer } from 'react';
import './App.css';
import Upload from './Upload';
import PDFView from './PDFView';
import FileData from './files/FileData';
import Explorer from './files/Explorer';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

Amplify.configure(awsconfig);

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
    <Router>
      <div className="App">
        <nav className="App-nav"></nav>
        <Switch>
          <Route path="/new">
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
          </Route>
          <Route path="/">
            <section className="App-split-view">
              {/* <PDFView url={state.newCase.fileUrl} />
              <FileData /> */}
              <Explorer />
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App, true);
