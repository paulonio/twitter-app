import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignUp from '@components/SignUp/SignUp';
import CustomProvider from '../EditUser/testUtils';

describe('Sign up', () => {
  it('should render sign up component', () => {
    const { container } = render(
      <CustomProvider>
        <SignUp />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should change sign up inputs', () => {
    render(
      <CustomProvider>
        <SignUp />
      </CustomProvider>
    );

    const nameInput: HTMLInputElement = screen.getByTestId('name');
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    fireEvent.change(nameInput, { target: { value: 'name' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });
    expect(nameInput.value).toEqual('name');
    expect(emailInput.value).toEqual('test@test.com');
    expect(passwordInput.value).toEqual('test');
  });

  it('should set errors on incorrect values', async () => {
    render(
      <CustomProvider>
        <SignUp />
      </CustomProvider>
    );

    const nameInput: HTMLInputElement = screen.getByTestId('name');
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submit: HTMLButtonElement = screen.getByTestId('submit-button');
    fireEvent.change(nameInput, { target: { value: 'na' } });
    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });
    fireEvent.click(submit);
    await waitFor(() => {
      expect(screen.getByText('name must be at least 3 characters')).toBeInTheDocument();
      expect(screen.getByText('email must be a valid email')).toBeInTheDocument();
      expect(screen.getByText('password must be at least 6 characters')).toBeInTheDocument();
    });
  });

  it('should change selects correctly', () => {
    render(
      <CustomProvider>
        <SignUp />
      </CustomProvider>
    );

    const select: HTMLSelectElement = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'Apr' } });
    expect(select.value).toEqual('Apr');
  });
});
