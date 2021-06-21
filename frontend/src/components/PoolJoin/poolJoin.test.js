import PoolJoin from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
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


