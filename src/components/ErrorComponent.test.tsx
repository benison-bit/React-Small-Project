import { render, screen } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

describe('Error Component', () => {
  it('should render an error message', () => {
    render(<ErrorComponent message="Error Occured" />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Error Occured');
  });
});