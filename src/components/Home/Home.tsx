import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Header from '@components/Header/Header';
import TweetBlock from '@components/TweetBlock/TweetBlock';
import Tweets from '@components/Tweets/Tweets';
import { HeaderTitle } from '@components/Profile/styled';

import type { StoreType } from '@store/index.ts';
import type { User } from '@store/slices/authSlice';

import { HeaderSpace, HomeWrapper } from './styled';

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
