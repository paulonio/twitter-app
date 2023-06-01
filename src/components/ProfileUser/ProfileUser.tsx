import React from 'react';
import { useSelector } from 'react-redux';
import type { User } from '../../store/slices/authSlice';
import { Nickname, UserBio, UserWrapper, Username } from './styled';
import Followers from '../Followers/Followers';
import ProfileUserHeader from '../ProfileUserHeader/ProfileUserHeader';
import { StoreType } from '../../store';

const ProfileUser = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <UserWrapper>
      <ProfileUserHeader />
      <Username>{user?.displayName}</Username>
      <Nickname>@{user?.email?.split('@')[0]}</Nickname>
      {user?.gender && <UserBio>Gender: {user.gender}</UserBio>}
      {user?.telegram && <UserBio>Telegram: {user?.telegram}</UserBio>}
      <Followers />
    </UserWrapper>
  );
};

export default ProfileUser;
