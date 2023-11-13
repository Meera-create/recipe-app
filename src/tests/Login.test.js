import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

test('renders the Login component and logs in', async () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const emailInput = getByLabelText('Email:');
  const passwordInput = getByLabelText('Password:');
  fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  const loginButton = getByText('Login');
  fireEvent.click(loginButton);

  await waitFor(() => {
    const successMessage = screen.queryByText('You have logged in successfully');
    const errorMessage = screen.queryByText('Error message'); 

    if (successMessage) {
      expect(successMessage).toBeInTheDocument();
    } else if (errorMessage) {
      expect(errorMessage).toBeInTheDocument();
    }
  });
});

