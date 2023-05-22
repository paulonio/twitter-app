import React from 'react';
import { TweetsHeader, TweetsWrapper } from './styled';
import Tweet from '../Tweet/Tweet';

const Tweets = () => {
  return (
    <TweetsWrapper>
      <TweetsHeader>Tweets</TweetsHeader>
      <Tweet />
    </TweetsWrapper>
  );
};

export default Tweets;
