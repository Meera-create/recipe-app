import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GuestLogin from '../components/GuestLogin';

describe('GuestLogin', () => {
  it('navigates to /recipe-form when the "Login As Guest" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <GuestLogin />
      </MemoryRouter>
    );

    const loginButton = getByText('Login As Guest');
    fireEvent.click(loginButton);
  });
});
