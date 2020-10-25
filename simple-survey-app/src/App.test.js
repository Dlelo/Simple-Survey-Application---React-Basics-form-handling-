import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("start Testing", ()=> {
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Simple Survey App/i);
    expect(linkElement).toBeInTheDocument();
  });
});

