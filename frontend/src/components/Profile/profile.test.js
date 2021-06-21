import Profile from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as api from '../../httpClient/axios';
import { BrowserRouter as Router } from 'react-router-dom';
jest.mock('../../httpClient/axios');

// Click add new pool returns object with Nano ID
describe('Tests Add New Pool button', () => {
  it('should call function on click', () => {
    const mockSubmitHandler = jest.fn();
    render(
      <Router>
        <Profile createPoolHandler={mockSubmitHandler} />
      </Router>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Add New Pool' }));
    console.log('firing');
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});

// it('should call async function on click', () => {
//   api.postCreatePool.mockResolvedValue([
//     {
//       id: 14,
//       nanoId: 'H5nXFwmuF5',
//       predictions: Array(0),
//       user_pool: {},
//     },
//   ]);
//   render(<Profile />);
//   userEvent.click(screen.getByRole('button', { name: /add new pool/i }));
//   expect(api.postCreatePool).toHaveBeenCalled();
// });
