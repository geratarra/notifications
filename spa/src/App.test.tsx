import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders Notifications link', () => {
  render(
    <MemoryRouter>
      <App />
    </ MemoryRouter>
  );
  const linkElement = screen.getByText(/Notifications/i);
  expect(linkElement).toBeInTheDocument();
});
