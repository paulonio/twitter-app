import React from 'react';
import { useSelector } from 'react-redux';
import { User } from 'firebase/auth';
import { Nickname, UserBio, UserWrapper, Username } from './styled';
import Followers from '../Followers/Followers';
import ProfileUserHeader from '../ProfileUserHeader/ProfileUserHeader';
import { StoreType } from '../../store';

const ProfileUser = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <UserWrapper>
      <ProfileUserHeader />
      <Username>{user?.displayName || 'Bobur'}</Username>
      <Nickname>@{user?.email?.split('@')[0] || '@bobur'}</Nickname>
      <UserBio>UX&UI designer at @abutechuz</UserBio>
      <Followers />
    </UserWrapper>
  );
};

export default ProfileUser;
