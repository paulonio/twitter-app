import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Header from '@components/Header/Header';
import TweetBlock from '@components/TweetBlock/TweetBlock';
import Tweets from '@components/Tweets/Tweets';
import { HeaderTitle } from '@components/Profile/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

import type { StoreType } from '@store/index.ts';
import type { UserType } from '@store/slices/authSlice';

import { HeaderSpace, HomeWrapper } from './styled';

const Home = () => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <HomeWrapper>
      <ErrorBoundary>
        <Header>
          <HeaderTitle>Home</HeaderTitle>
        </Header>
        <HeaderSpace />
        <TweetBlock />
        <Tweets type="feed" />
      </ErrorBoundary>
    </HomeWrapper>
  );
};

export default Home;
