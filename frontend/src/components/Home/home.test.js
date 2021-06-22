import Home from '.';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import * as api from '../../httpClient/axios';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../httpClient/axios');

describe('Test Button component', () => {
  it('should call function on form submit', async () => {
    api.login.mockResolvedValue({
      data: {
        createdAt: '2021-06-18T10:27:52.249Z',
        email: 'will@example.com',
        id: 3,
        name: 'Will',
        updatedAt: '2021-06-18T10:27:52.249Z',
      },
    });
    render(
      <Router>
        <Home />
      </Router>
    );
    const nameInput = screen.getByTestId('emailInput');
    userEvent.type(nameInput, 'will@example.com');
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(api.login).toHaveBeenCalledWith('will@example.com');
    });
  });
});
