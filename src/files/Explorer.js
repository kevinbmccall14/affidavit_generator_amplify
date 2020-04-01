import React, { useEffect, useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFiles } from '../graphql/queries';
import { onCreateFile } from '../graphql/subscriptions';
import './Explorer.css';
import { Link } from 'react-router-dom';
import PDFView from './PDFView';
import FileData from './FileData';

const RECEIVE_FILES = 'RECEIVE_FILES';
const RECEIVE_FILE = 'RECEIVE_FILE';
const OPEN_FILE = 'OPEN_FILE';
const CHANGE_PAGE = 'CHANGE_PAGE';

const initialState = {
  files: [],
  openFile: '',
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_FILES:
      return { ...state, files: action.files };
    case RECEIVE_FILE:
      return { ...state, files: [...state.files, action.file] };
    case OPEN_FILE:
      return { ...state, openFile: action.url };
    case CHANGE_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

const Explorer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchFiles() {
      const data = await API.graphql(graphqlOperation(listFiles));
      dispatch({
        type: RECEIVE_FILES,
        files: data.data.listFiles.items,
      });
    }
    fetchFiles();

    const subscription = API.graphql(
      graphqlOperation(onCreateFile),
    ).subscribe({
      next: eventData => {
        const file = eventData.value.data.onCreateFile;
        dispatch({
          type: RECEIVE_FILE,
          file,
        });
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <section>
      <nav className="Explorer-controls-container">
        <ul>
          <li>
            <button>
              <Link to="/new">+ Files</Link>
            </button>
          </li>
          <li>
            <span
              className="Explorer-control"
              onClick={() => {
                dispatch({ type: OPEN_FILE, url: '' });
              }}
            >
              {state.openFile ? '←' : null}
            </span>
          </li>
        </ul>
      </nav>
      <section className="Explorer-split-view">
        {state.openFile && (
          <PDFView
            url={state.openFile}
            onChangePage={page =>
              dispatch({
                type: CHANGE_PAGE,
                page,
              })
            }
          />
        )}
        {state.openFile && (
          <FileData url={state.openFile} page={state.page} />
        )}
      </section>
      {!state.openFile && (
        <ul className="Explorer-items-container">
          {state.files.map(
            file =>
              file &&
              file.id && (
                <li
                  key={file.id}
                  className="Explorer-item"
                  onClick={() =>
                    dispatch({ type: OPEN_FILE, url: file.id })
                  }
                >
                  <span className="Explorer-text">{file.id}</span>
                </li>
              ),
          )}
        </ul>
      )}
    </section>
  );
};

export default Explorer;
