import React from 'react';
import { HeaderTweets, HeaderUsername, ProfileImage, ProfileWrapper } from './styled';
import Header from '../Header/Header';
import ProfileUser from '../ProfileUser/ProfileUser';
import TweetBlock from '../TweetBlock/TweetBlock';
import Tweets from '../Tweets/Tweets';

const Profile = () => {
  return (
    <ProfileWrapper>
      <Header>
        <HeaderUsername>Bobur</HeaderUsername>
        <HeaderTweets>1,070 Tweets</HeaderTweets>
      </Header>
      <ProfileImage />
      <ProfileUser />
      <TweetBlock />
      <Tweets />
    </ProfileWrapper>
  );
};

export default Profile;
