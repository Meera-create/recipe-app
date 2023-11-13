import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logout from '../components/Logout';

test('renders the Logout component and displays "Logged out" message after logout', async () => {
  const { getByText } = render(
    <MemoryRouter>
      <Logout />
    </MemoryRouter>
  );

 
  const logoutButton = getByText('Logout');
  fireEvent.click(logoutButton);


  await waitFor(() => {
    const loggedOutMessage = screen.getByText("User signed out");
    expect(loggedOutMessage).toBeInTheDocument();
  });
});
