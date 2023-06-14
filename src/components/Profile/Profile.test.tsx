import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Profile from '@components/Profile/Profile';
import ProfileUser from '@components/Profile/ProfileUser';

import { renderWithProviders } from '@src/utils/testRender';
import type { RootState } from '@src/utils/testUtils';

export const testData: RootState = {
  auth: {
    user: { email: 'test@test.com', displayName: 'test', uid: 'test' },
    allUsers: [],
    error: null,
  },
  tweet: { tweets: [], profileTweets: [], error: null },
  theme: { theme: 'dark' },
};

describe('Profile', () => {
  it('should render profile component', () => {
    const { container } = renderWithProviders(<Profile />);

    expect(container).toMatchSnapshot();
  });

  it('should render profile user correctly', () => {
    renderWithProviders(<ProfileUser />, { preloadedState: testData });

    const username = screen.getByTestId('username');
    const nickname = screen.getByTestId('nickname');

    expect(username.textContent).toEqual('test');
    expect(nickname.textContent).toEqual('@test');
  });
});
