import Home from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import * as api from '../../httpClient/axios';
jest.mock('../../httpClient/axios')

// Checks the Login button Fires a Fake Function....appears to work only with input to mockSubmitHandler
describe('Test Button component', () => {
  it('should call function on form submit', () => {
    api.login.mockResolvedValue(
      { data: {
      createdAt: "2021-06-18T10:27:52.249Z",
      email: "will@example.com",
      id: 3,
      name: "Will",
      updatedAt: "2021-06-18T10:27:52.249Z"
    },
  }
    )
    render(<Home />);
    const nameInput = screen.getByTestId('emailInput')
    userEvent.type(nameInput, 'will@example.com')
    // screen.debug(nameInput) 

    userEvent.click(screen.getByRole('button', {name: /login/i}))
    expect(api.login).toHaveBeenCalledWith('will@example.com')
  });
});

// mock redirect component

