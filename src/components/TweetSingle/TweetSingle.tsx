import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { StoreType } from '../../store';
import type { TweetType } from '../../store/slices/tweetSlice';
import Tweet from '../Tweet/Tweet';
import { TweetWrapper } from './styled';

const TweetSingle = () => {
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.tweets);
  const { id } = useParams();
  const [currentTweet] = tweets.filter((tweet) => tweet.id === id);

  return (
    <TweetWrapper>
      <Tweet currentTweet={currentTweet} />
    </TweetWrapper>
  );
};

export default TweetSingle;
