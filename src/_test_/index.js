import React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crashing', () => {
  const {getByText} = render(<App />);
  const title = screen.getByText(/learn react/i);
  expect(title).toBeInTheDocument();
});
