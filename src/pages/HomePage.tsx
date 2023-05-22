import React from 'react';
import { Wrapper } from '../components/ProfilePage/styled';
import Menu from '../components/Menu/Menu';
import Sidebar from '../components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <Wrapper>
      <Menu />
      <div>Home page</div>
      <Sidebar />
    </Wrapper>
  );
};

export default HomePage;
