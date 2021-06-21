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
// Click add new pool returns object with Nano ID
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

// mport React from 'react';
// import { shallow } from 'enzyme';
// import Button from './Button';

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

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

// describe('Tests Add New Pool button', () => {
//   it('should call function on click', () => {
//     const mockClickHandler = jest.fn();
//     render(
//       <Router>
//         <Profile onClick={mockClickHandler} />
//       </Router>
//     );
//     fireEvent.click(screen.getByRole('button', { name: 'Add New Pool' }));
//     console.log('firing');
//     expect(mockClickHandler).toHaveBeenCalled();
//   });
// });
