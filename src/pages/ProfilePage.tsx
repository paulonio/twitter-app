import React from 'react';
import { Wrapper } from '../components/ProfilePage/styled';
import Menu from '../components/Menu/Menu';
import Profile from '../components/Profile/Profile';
import Sidebar from '../components/Sidebar/Sidebar';

const ProfilePage = () => {
  return (
    <Wrapper>
      <Menu />
      <Profile />
      <Sidebar />
    </Wrapper>
  );
};

export default ProfilePage;
