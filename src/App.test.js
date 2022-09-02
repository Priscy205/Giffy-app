import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const {findByText} = render(<App />);
  const title = await findByText (/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});

//test('renders without crashing', () => {
  //  const {getByText} = render(<App />);
  //  const title = screen.getByText(/learn react/i);
  //  expect(title).toBeInTheDocument();
//  });
