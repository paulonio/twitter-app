import React from 'react';
import Menu from '../Menu/Menu';
import { Wrapper } from './styled';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
  return (
    <Wrapper>
      <Menu />
      <Sidebar />
    </Wrapper>
  );
};

export default Profile;
