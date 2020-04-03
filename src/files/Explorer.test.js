import React from 'react';
import ReactDOM from 'react-dom';
import Explorer from './Explorer';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders Explorer in DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Explorer />
    </Router>,
    div,
  );
});
