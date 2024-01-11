import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('should render all the links', () => {
    const { getByText } = render(<Header />, {wrapper: MemoryRouter});
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const homeLink = getByText(/Home/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const exchangesLink = getByText(/Exchanges/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const coinsLink = getByText(/Coins/i);
    expect(homeLink).toBeInTheDocument();
    expect(exchangesLink).toBeInTheDocument();
    expect(coinsLink).toBeInTheDocument();
  });
});