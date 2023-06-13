import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@src/utils/testRender';
import type { TweetType } from '@src/store/slices/tweetSlice';
import Tweet from './Tweet';
import { testData } from '../Profile/Profile.test';

const tweetString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const tweetData: TweetType = {
  tweet: tweetString,
  userEmail: 'test@test.com',
  displayName: 'test',
  date: 'Jun 4',
  userUid: '111111111',
  id: '222222222222',
  likes: [],
};

describe('Tweet', () => {
  it('should render tweet component', () => {
    const { container } = renderWithProviders(<Tweet currentTweet={tweetData} />, {
      preloadedState: testData,
    });

    expect(container).toMatchSnapshot();
  });

  it('should display data correctly', () => {
    renderWithProviders(<Tweet currentTweet={tweetData} />, {
      preloadedState: testData,
    });

    const tweet = screen.getByTestId('tweet-text');
    const username = screen.getByTestId('username');
    const nickname = screen.getByTestId('nickname');

    expect(tweet.textContent).toEqual(tweetString);
    expect(username.textContent).toEqual('test');
    expect(nickname.textContent).toEqual('@test · Jun 4');
  });
});
