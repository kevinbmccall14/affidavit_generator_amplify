import React, { useEffect, useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFiles } from '../graphql/queries';
import { onCreateFile } from '../graphql/subscriptions';
import './Files.scss';
import FileBrowser, { Icons } from 'react-keyed-file-browser';
import FileRow from './FileRow';
import FileDetails from './FileDetails';

const RECEIVE_FILES = 'RECEIVE_FILES';
const RECEIVE_FILE = 'RECEIVE_FILE';
const RENAME_FOLDER = 'RENAME_FOLDER';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_FILES:
      return action.files;
    case RECEIVE_FILE:
      return [...state, action.file];
    case RENAME_FOLDER:
      const { oldKey, newKey } = action;
      const newFiles = [];
      state.forEach((file) => {
        if (file.key.substr(0, oldKey.length) === oldKey) {
          newFiles.push({
            ...file,
            key: file.key.replace(oldKey, newKey),
          });
        } else {
          newFiles.push(file);
        }
      });
      return newFiles;
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
      next: (eventData) => {
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
    <section className="Files">
      <FileBrowser
        files={state}
        showActionBar={true}
        icons={Icons.FontAwesome(4)}
        headerRenderer={null}
        fileRenderer={FileRow}
        detailRenderer={FileDetails}
        onCreateFolder={(key) => {
          dispatch({
            type: RECEIVE_FILE,
            file: { key },
          });
        }}
        // onCreateFiles={this.handleCreateFiles}
        // onMoveFolder={this.handleRenameFolder}
        // onMoveFile={this.handleRenameFile}
        onRenameFolder={(oldKey, newKey) => {
          dispatch({
            type: RENAME_FOLDER,
            oldKey,
            newKey,
          });
        }}
        // onRenameFile={this.handleRenameFile}
        // onDeleteFolder={this.handleDeleteFolder}
        // onDeleteFile={this.handleDeleteFile}
      />
    </section>
  );
};

export default Explorer;
