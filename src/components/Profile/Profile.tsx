import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderTweets, HeaderUsername, ProfileImage, ProfileWrapper } from './styled';
import Header from '../Header/Header';
import ProfileUser from '../ProfileUser/ProfileUser';
import TweetBlock from '../TweetBlock/TweetBlock';
import Tweets from '../Tweets/Tweets';
import type { StoreType } from '../../store';
import type { User } from '../../store/slices/authSlice';
import { syncTweetsRequest } from '../../store/saga/tweetSaga';

const Profile = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(syncTweetsRequest(user));
    }
  }, []);

  return (
    <ProfileWrapper>
      <Header>
        <HeaderUsername>{user?.displayName}</HeaderUsername>
        <HeaderTweets>1,070 Tweets</HeaderTweets>
      </Header>
      <ProfileImage />
      <ProfileUser />
      <TweetBlock />
      <Tweets type="profile" />
    </ProfileWrapper>
  );
};

export default Profile;
