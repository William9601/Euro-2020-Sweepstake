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

describe('Test Text Input', () => {
  it('should call function on text change', () => {
    render(<PoolJoin />);
    const text = screen.getByLabelText('Invite code');
    userEvent.type(text, 'Hello');
    expect(text).toHaveValue('Hello');
  });
});
