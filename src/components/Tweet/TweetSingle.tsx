import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Tweet from '@components/Tweet/Tweet';

import type { StoreType } from '@store/index.ts';
import type { TweetType } from '@store/slices/tweetSlice';

import { TweetSingleWrapper } from './styled';

const TweetSingle = () => {
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.tweets);
  const { id } = useParams();
  const [currentTweet] = tweets.filter((tweet) => tweet.id === id);

  return (
    <TweetSingleWrapper>
      <Tweet currentTweet={currentTweet} />
    </TweetSingleWrapper>
  );
};

export default TweetSingle;
