import React from 'react';
import ReactDOM from 'react-dom';
import Files from './Files';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders Files Explorer in DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Files />
    </Router>,
    div,
  );
});
