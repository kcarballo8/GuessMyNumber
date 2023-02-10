import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import GuessForm from './components/GuessForm';
// import NewGame from './components/NewGame';

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
