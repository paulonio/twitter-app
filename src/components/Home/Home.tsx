import React from 'react';
import { HeaderSpace, HomeWrapper } from './styled';
import Header from '../Header/Header';
import TweetBlock from '../TweetBlock/TweetBlock';
import Tweets from '../Tweets/Tweets';

const Home = () => {
  return (
    <HomeWrapper>
      <Header>Home</Header>
      <HeaderSpace />
      <TweetBlock />
      <Tweets type="feed" />
    </HomeWrapper>
  );
};

export default Home;
