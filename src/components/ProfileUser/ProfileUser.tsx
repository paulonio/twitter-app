import React from 'react';
import { useSelector } from 'react-redux';

import Followers from '@components/Followers/Followers';
import ProfileUserHeader from '@components/ProfileUserHeader/ProfileUserHeader';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

import type { User } from '@store/slices/authSlice';
import type { StoreType } from '@store/index.ts';

import { Nickname, UserBio, UserWrapper, Username } from './styled';

const ProfileUser = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <UserWrapper>
      <ErrorBoundary>
        <ProfileUserHeader />
        <Username>{user?.displayName}</Username>
        <Nickname>@{user?.email?.split('@')[0]}</Nickname>
        {user?.gender && <UserBio>Gender: {user.gender}</UserBio>}
        {user?.telegram && <UserBio>Telegram: {user?.telegram}</UserBio>}
        <Followers />
      </ErrorBoundary>
    </UserWrapper>
  );
};

export default ProfileUser;
