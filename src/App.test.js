import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders App in DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// test('App renders hello', () => {
//   const { getByText } = render(<App />);
//   expect(getByText('Hello')).toBeInTheDocument();
// });
