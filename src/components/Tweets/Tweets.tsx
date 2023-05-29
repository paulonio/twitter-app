import React from 'react';
import { useSelector } from 'react-redux';
import { TweetsHeader, TweetsWrapper } from './styled';
import Tweet from '../Tweet/Tweet';
import { StoreType } from '../../store';
import { TweetType } from '../../store/slices/tweetSlice';

const Tweets = () => {
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.tweets);

  return (
    <TweetsWrapper>
      <TweetsHeader>Tweets</TweetsHeader>
      {tweets && tweets.map(({ text }, id) => <Tweet key={id} text={text} />)}
    </TweetsWrapper>
  );
};

export default Tweets;
