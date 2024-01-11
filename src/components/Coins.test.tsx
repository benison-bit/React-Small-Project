import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Coins from './Coins';
import { MemoryRouter } from 'react-router-dom';
 
describe('Coins Component', () => {
  it('Should render without crashing', () => {
    const { getByTestId } = render(<Coins />, {wrapper: MemoryRouter});
    const coins = getByTestId('coins');
 
    expect(coins).toBeInTheDocument();
  });
 
  it('Should render properly', () => {
    const { getByTestId } = render(<Coins />, {wrapper: MemoryRouter});
    const coins = getByTestId('coins');
 
    expect(coins).toHaveTextContent('Coins');
  });
 
  it('Should change currencies', () => {
    const { getByTestId, getByText } = render(<Coins />, {wrapper: MemoryRouter});
    const coins = getByTestId('coins');
 
    expect(coins).toHaveTextContent('Coins');
 
    fireEvent.click(getByText('USD'));
 
    expect(coins).toHaveTextContent('Coins');
  });
});