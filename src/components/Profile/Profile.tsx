import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Header from '@components/Header/Header';
import ProfileUser from '@components/ProfileUser/ProfileUser';
import TweetBlock from '@components/TweetBlock/TweetBlock';
import Tweets from '@components/Tweets/Tweets';

import type { StoreType } from '@store/index.ts';
import type { User } from '@store/slices/authSlice';
import { syncTweetsRequest } from '@store/saga/tweetSaga';

import { HeaderSubtitle, HeaderTitle, ProfileImage, ProfileWrapper } from './styled';

const Profile = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const dispatch = useDispatch();

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
      <Header>
        <HeaderTitle>{user?.displayName}</HeaderTitle>
        <HeaderSubtitle>1,070 Tweets</HeaderSubtitle>
      </Header>
      <ProfileImage />
      <ProfileUser />
      <TweetBlock />
      <Tweets type="profile" />
    </ProfileWrapper>
  );
};

export default Profile;
