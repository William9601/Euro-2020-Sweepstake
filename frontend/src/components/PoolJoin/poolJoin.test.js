import PoolJoin from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Test Button component', () => {
  it('should call function on form submit', () => {
    const mockSubmitHandler = jest.fn();
    render(<PoolJoin submitHandler={mockSubmitHandler} />);
    const form = screen.getByTestId('formId');
    fireEvent.submit(form);
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});

// Good job again with this one. This one shows how easy it is to test something when it receives
//  the functions through props!
// You could also write a test here for the onChangeHandler and a larger test
// that changes the values and then checks the submitHandler in combination.
// Ensuring it has been called with the correct values!

describe('Test Text Input', () => {
  it('should call function on text change', () => {
    render(<PoolJoin />);
    const text = screen.getByRole('textbox');
    userEvent.type(text, 'Hello');
    expect(text).toHaveValue('Hello');
  });
});
