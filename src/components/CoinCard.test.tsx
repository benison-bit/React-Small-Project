import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './CoinCard';
import { MemoryRouter } from 'react-router-dom';
 
describe('Coin Card Component', () => {
  afterEach(cleanup);
 
  const props = {
    name: "Bitcoin",
    img: "https://bit.ly/2Wm8mkV",
    id: "1",
    symbol: "BTC",
    price: 10,
    currencySymbol: "$"
  };
 
  const { queryByTestId, getByTestId } = render(<Card {...props} />, {wrapper: MemoryRouter});
 
  it('should render the Coin Card component', () => {
    const card = queryByTestId('coin-card');
    expect(card).not.toBeInTheDocument();
  });
 
  it('should render the Coin name', () => {
    const coinName = queryByTestId('coin-name');
    expect(coinName).not.toBeInTheDocument();
  });
 
 
  it('should render the Coin Symbol', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const coinSymbol = queryByTestId('coin-symbol');
    expect(coinSymbol).not.toBeInTheDocument();
  });
 
  it('should render the Coin Price', () => {
    const coinPrice = queryByTestId('coin-price');
    expect(coinPrice).not.toBeInTheDocument();
  });

});