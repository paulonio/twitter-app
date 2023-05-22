import React from 'react';
import { Nickname, UserBio, UserWrapper, Username } from './styled';
import Followers from '../Followers/Followers';
import ProfileUserHeader from '../ProfileUserHeader/ProfileUserHeader';

const ProfileUser = () => {
  return (
    <UserWrapper>
      <ProfileUserHeader />
      <Username>Bobur</Username>
      <Nickname>@bobur_mavlonov</Nickname>
      <UserBio>UX&UI designer at @abutechuz</UserBio>
      <Followers />
    </UserWrapper>
  );
};

export default ProfileUser;
