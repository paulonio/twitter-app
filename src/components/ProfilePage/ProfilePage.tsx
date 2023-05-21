import React from 'react';
import Menu from '../Menu/Menu';
import { Wrapper } from './styled';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';

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
