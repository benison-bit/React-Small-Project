import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

fdescribe('Loader component', () => {
 
  it('should not render a loader component when props.state is false', () => {
    const props = {
      state: "false"
    };

    render(<Loader {...props} />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});