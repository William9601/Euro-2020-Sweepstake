import Profile from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import * as api from '../../httpClient/axios';

jest.mock('../../httpClient/axios', () => {
  return { postCreatePool: jest.fn() };
});

describe('Tests Add New Pool button', () => {
  it('should call function on click', () => {
    api.postCreatePool.mockImplementationOnce(() => {
      return Promise.resolve({
        data: [
          {
            id: 14,
            nanoId: 'H5nXFwmuF5',
            predictions: Array(0),
            user_pool: {},
          },
        ],
      });
    });
    render(
      <Router>
        <Profile />
      </Router>
    );
    const myButton = screen.getByRole('button', { name: 'Add New Pool' });
    userEvent.click(myButton);
    expect(api.postCreatePool).toHaveBeenCalled();
  });
});

// You could also check the output that is being displayed on the screen
// though.
// Once the submit logic has been performed, the PoolList would render
// something different, we should check if this is the case. What the user sees
// is the most important thing!
