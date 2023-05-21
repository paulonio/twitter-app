import React from 'react';
import { HeaderTweets, HeaderUsername, ProfileImage, ProfileWrapper } from './styled';
import Header from '../Header/Header';
import ProfileUser from '../ProfileUser/ProfileUser';

const Profile = () => {
  return (
    <ProfileWrapper>
      <Header>
        <HeaderUsername>Bobur</HeaderUsername>
        <HeaderTweets>1,070 Tweets</HeaderTweets>
      </Header>
      <ProfileImage />
      <ProfileUser />
    </ProfileWrapper>
  );
};

export default Profile;
