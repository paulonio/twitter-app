import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditUser from '@components/EditUser/EditUser';
import ChangePassword from '@components/EditUser/ChangePassword';
import CustomProvider from './testUtils';

describe('Edit user', () => {
  it('should render edit user component', () => {
    const { container } = render(
      <CustomProvider>
        <EditUser isActive setActive={() => {}} />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render change password component', () => {
    const { container } = render(
      <CustomProvider>
        <ChangePassword />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('sholud change inputs correctly', () => {
    render(
      <CustomProvider>
        <EditUser isActive setActive={() => {}} />
      </CustomProvider>
    );

    const input: HTMLInputElement = screen.getByTestId('input-name');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.value).toEqual('Test');
  });

  it('should change radio button', () => {
    render(
      <CustomProvider>
        <EditUser isActive setActive={() => {}} />
      </CustomProvider>
    );

    const radio: HTMLInputElement = screen.getByTestId('radio-button');
    expect(radio.checked).toEqual(false);
    fireEvent.click(radio);
    expect(radio.checked).toEqual(true);
  });

  it('should change input in change password form', () => {
    render(
      <CustomProvider>
        <ChangePassword />
      </CustomProvider>
    );

    const input: HTMLInputElement = screen.getByTestId('password-input');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.value).toEqual('Test');
  });
});
