import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/RecipeFinder/Alert';

describe('Alert component', () => {
  test('renders null when no message is provided', () => {
    const { container } = render(<Alert message="" success={true} />);
    
    expect(container.firstChild).toBeNull();
  });

  test('renders success alert with provided message', () => {
    const message = 'This is a success message';
    const { getByText, container } = render(<Alert message={message} success={true} />);
    
  
    const successAlert = getByText(message);
    expect(successAlert).toBeInTheDocument();

  
    expect(container.firstChild).toHaveClass('alert-success');
  });

  test('renders error alert with provided message', () => {
    const message = 'This is an error message';
    const { getByText, container } = render(<Alert message={message} success={false} />);
    
  
    const errorAlert = getByText(message);
    expect(errorAlert).toBeInTheDocument();

    
    expect(container.firstChild).toHaveClass('alert-error');
  });
});
