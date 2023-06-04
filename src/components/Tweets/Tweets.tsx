import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Tweet from '@components/Tweet/Tweet';

import type { StoreType } from '@store/index.ts';
import { TweetType } from '@store/slices/tweetSlice';

import { TweetsHeader, TweetsWrapper } from './styled';

interface TweetsProps {
  type: 'profile' | 'feed';
}

const Tweets: FC<TweetsProps> = ({ type }) => {
  const tweets = useSelector<StoreType, TweetType[]>((state) =>
    type === 'profile' ? state.tweet.profileTweets : state.tweet.tweets
  );

  return (
    <TweetsWrapper>
      <TweetsHeader>Tweets</TweetsHeader>
      {tweets && tweets.map((tweet) => <Tweet key={tweet.id} currentTweet={tweet} />)}
    </TweetsWrapper>
  );
};

export default Tweets;
