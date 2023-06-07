import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Menu from '@components/Menu/Menu';
import type { UserType } from '@src/store/slices/authSlice';
import CustomProvider from '../EditUser/testUtils';
import MenuUser from './MenuUser';

const userMock: UserType = {
  email: 'test@test.com',
  displayName: 'test',
  uid: 'test',
  gender: 'male',
  telegram: 'test',
};

describe('Menu', () => {
  it('should render Menu component', () => {
    const { container } = render(
      <CustomProvider>
        <Menu />
      </CustomProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should open modal on button click', () => {
    render(
      <CustomProvider>
        <Menu />
      </CustomProvider>
    );

    const button: HTMLButtonElement = screen.getByTestId('menu-button');
    fireEvent.click(button);
    const input: HTMLInputElement = screen.getByTestId('tweet-input');

    expect(input).toBeInTheDocument();
  });

  it('should test menu user', () => {
    render(
      <CustomProvider>
        <MenuUser user={userMock} />
      </CustomProvider>
    );

    const username = screen.getByTestId('username');
    const nickname = screen.getByTestId('nickname');

    expect(username.textContent).toEqual('test');
    expect(nickname.textContent).toEqual('@test');
  });
});
