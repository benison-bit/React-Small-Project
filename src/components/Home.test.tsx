import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders text of XCrypto', () => {
  const { getByText } = render(<Home />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const textElement = getByText(/XCrypto/i);
  expect(textElement).toBeInTheDocument();
});
