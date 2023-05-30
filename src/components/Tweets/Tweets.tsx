import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TweetsHeader, TweetsWrapper } from './styled';
import Tweet from '../Tweet/Tweet';
import { StoreType } from '../../store';
import { TweetType } from '../../store/slices/tweetSlice';

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
      {tweets &&
        tweets.map(({ tweet, displayName, userEmail }, id) => (
          <Tweet key={id} tweet={tweet} displayName={displayName} userEmail={userEmail} />
        ))}
    </TweetsWrapper>
  );
};

export default Tweets;
