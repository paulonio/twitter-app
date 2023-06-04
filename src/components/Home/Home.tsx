import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { HeaderSpace, HomeWrapper } from './styled';
import Header from '../Header/Header';
import TweetBlock from '../TweetBlock/TweetBlock';
import Tweets from '../Tweets/Tweets';
import { StoreType } from '../../store';
import type { User } from '../../store/slices/authSlice';
import { HeaderTitle } from '../Profile/styled';

const Home = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <HomeWrapper>
      <Header>
        <HeaderTitle>Home</HeaderTitle>
      </Header>
      <HeaderSpace />
      <TweetBlock />
      <Tweets type="feed" />
    </HomeWrapper>
  );
};

export default Home;
