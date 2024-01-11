import React from 'react';
import { render} from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the text and avatar', () => {
    const { getByText } = render(<Footer />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('About Us')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Benison Muller')).toBeInTheDocument();
  });
});