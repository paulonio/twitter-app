import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Header from '@components/Header/Header';
import ProfileUser from '@src/components/Profile/ProfileUser';
import TweetBlock from '@components/TweetBlock/TweetBlock';
import Tweets from '@components/Tweets/Tweets';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

import type { StoreType } from '@store/index.ts';
import type { UserType } from '@store/slices/authSlice';
import type { TweetType } from '@store/slices/tweetSlice';
import { syncTweetsRequest } from '@store/actions/actions';

import { HeaderSubtitle, HeaderTitle, ProfileImage, ProfileWrapper } from './styled';

const Profile = () => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.profileTweets);
  const dispatch = useDispatch();
  const profileTweetsAmount = tweets.length;

  useEffect(() => {
    if (user) {
      dispatch(syncTweetsRequest(user));
    }
  }, []);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <ProfileWrapper>
      <ErrorBoundary>
        <Header>
          <HeaderTitle>{user?.displayName}</HeaderTitle>
          <HeaderSubtitle>{profileTweetsAmount} Tweets</HeaderSubtitle>
        </Header>
        <ProfileImage />
        <ProfileUser />
        <TweetBlock />
        <Tweets type="profile" />
      </ErrorBoundary>
    </ProfileWrapper>
  );
};

export default Profile;
