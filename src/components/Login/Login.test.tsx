import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from '@components/Login/Login';
import CustomProvider from '../EditUser/testUtils';

describe('Login', () => {
  it('should render login component', () => {
    const { container } = render(
      <CustomProvider>
        <Login />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should change login inputs', () => {
    render(
      <CustomProvider>
        <Login />
      </CustomProvider>
    );

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    fireEvent.change(emailInput, { target: { value: 'Test email' } });
    fireEvent.change(passwordInput, { target: { value: 'Test password' } });
    expect(emailInput.value).toEqual('Test email');
    expect(passwordInput.value).toEqual('Test password');
  });

  it('should set errors on incorrect values', async () => {
    render(
      <CustomProvider>
        <Login />
      </CustomProvider>
    );

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submit: HTMLButtonElement = screen.getByTestId('submit-button');
    fireEvent.change(emailInput, { target: { value: 'Test' } });
    fireEvent.change(passwordInput, { target: { value: 'Test' } });
    fireEvent.click(submit);
    await waitFor(() => {
      expect(screen.getByText('email must be a valid email')).toBeInTheDocument();
      expect(screen.getByText('password must be at least 6 characters')).toBeInTheDocument();
    });
  });
});
