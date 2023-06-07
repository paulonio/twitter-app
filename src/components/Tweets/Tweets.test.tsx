import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderWithProviders } from '@src/utils/testRender';
import { testData } from '../Profile/Profile.test';
import Tweets from './Tweets';
import { tweetData } from '../Tweet/Tweet.test';

const tweetsArray = [tweetData];
const nonEmptyData = { ...testData, tweet: { ...testData.tweet, profileTweets: tweetsArray } };

describe('Tweets', () => {
  it('should render tweets component', () => {
    const { container } = renderWithProviders(<Tweets type="profile" />);

    expect(container).toMatchSnapshot();
  });

  it('should render tweets component on empty array', () => {
    renderWithProviders(<Tweets type="profile" />, { preloadedState: testData });

    const tweet = screen.queryAllByTestId('tweet-item');

    expect(tweet).toHaveLength(0);
  });

  it('should render tweets component on non empty array', () => {
    renderWithProviders(<Tweets type="profile" />, { preloadedState: nonEmptyData });

    const tweet = screen.queryAllByTestId('tweet-item');

    expect(tweet).toHaveLength(1);
  });
});
