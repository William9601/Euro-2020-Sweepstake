import PoolJoin from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';


describe('Test Button component', () => {
  it('should call function on form submit', () => {
    const mockSubmitHandler = jest.fn();
    render(<PoolJoin submitHandler={mockSubmitHandler} />);
    const form = screen.getByTestId('formId');
    fireEvent.submit(form);
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});

// describe('Test Button component', () => {
//   it('should call function on form submit', () => {
//     const mockSubmitHandler = jest.fn();
//     const { getByTestId } = render(<PoolJoin submitHandler={mockSubmitHandler} />);
//     fireEvent.submit(getByTestId('formId'));
//     expect(mockSubmitHandler).toHaveBeenCalled();
//   });

// });

