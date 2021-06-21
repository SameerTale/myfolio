import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Quantum Phinance Consulting Pvt. Ltd. | Senior Programmer Analyst');
  expect(linkElement).toBeInTheDocument();
});
