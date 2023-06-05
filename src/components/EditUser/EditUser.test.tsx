import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditUser from '@components/EditUser/EditUser';
import ChangePassword from '@components/EditUser/ChangePassword';

describe('Edit user', () => {
  it('should render edit user component', () => {
    const { container } = render(<EditUser isActive setActive={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should render change password component', () => {
    const { container } = render(<ChangePassword />);

    expect(container).toMatchSnapshot();
  });

  it('sholud change inputs correctly', () => {
    render(<EditUser isActive setActive={() => {}} />);
    const input: HTMLInputElement = screen.getByTestId('input-name');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.value).toEqual('Test');
  });

  it('should change radio button', () => {
    render(<EditUser isActive setActive={() => {}} />);
    const radio: HTMLInputElement = screen.getByTestId('radio-button');
    expect(radio.checked).toEqual(false);
    fireEvent.click(radio);
    expect(radio.checked).toEqual(true);
  });
});
