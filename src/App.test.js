import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page as Browse page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Browse/i);
  expect(linkElement).toBeInTheDocument();
});
