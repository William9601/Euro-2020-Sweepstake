import Home from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Checks the Login button Fires a Fake Function....appears to work only with input to mockSubmitHandler
describe('Test Button component', () => {
  it('should call function on form submit', () => {
    const mockSubmitHandler = jest.fn();
    render(<Home loginHandler={mockSubmitHandler('email')} />);
    const form = screen.getByTestId('formId');
    fireEvent.submit(form);
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});
