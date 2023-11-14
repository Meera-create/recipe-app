import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Homepage from '../components/HomePage';

test('renders the Homepage component', () => {
    const { getByText } = render(
        <MemoryRouter> 
          <Homepage />
        </MemoryRouter>
      );
  
  const welcomeText = getByText('Welcome to the Pantry!!');
  const loginText = getByText('Login in or Sign is as Guest to Find your recipes');
  const guestLoginButton = getByText('Login As Guest');
  const loginButton = getByText('Login');
  
  expect(welcomeText).toBeInTheDocument();
  expect(loginText).toBeInTheDocument();
  expect(guestLoginButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

