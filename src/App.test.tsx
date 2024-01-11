import React from 'react';
import { render, act, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import './App.css';
import { MemoryRouter } from 'react-router-dom';

describe('Test App', () => {
  it('Should render the App', () => {
    const { getByTestId } = render(<App />,{wrapper: MemoryRouter});
    const appElement = getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  it('Should render the Home page', async () => {
    const {  findByTestId } = render(<App />);
    await findByTestId('home-page');
  });

  it('Should render the Coins page', async () => {
    const { getByTestId, getByText } = render(<App />, {wrapper: MemoryRouter});
    await waitFor(() => expect(getByTestId('coins-page')).toBeInTheDocument());
    fireEvent.click(getByText('Coins'));
    await waitFor(() => expect(getByTestId('coins-page')).toBeInTheDocument());
  });

  it('Should render the Exchanges page', async () => {
    const { getByTestId, getByText, findByTestId } = render(<App />, {wrapper: MemoryRouter});
    // eslint-disable-next-line testing-library/prefer-screen-queries
    await findByTestId('exchanges-page');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText('Exchanges'));
    // eslint-disable-next-line testing-library/prefer-screen-queries
    await findByTestId('exchanges-page');
  });
});
