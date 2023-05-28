import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderTweets, HeaderUsername, ProfileImage, ProfileWrapper } from './styled';
import Header from '../Header/Header';
import ProfileUser from '../ProfileUser/ProfileUser';
import TweetBlock from '../TweetBlock/TweetBlock';
import Tweets from '../Tweets/Tweets';
import type { StoreType } from '../../store';
import type { User } from '../../store/slices/authSlice';

const Profile = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <ProfileWrapper>
      <Header>
        <HeaderUsername>{user?.displayName || 'Bobur'}</HeaderUsername>
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
