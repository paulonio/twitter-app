import React from 'react';
import { Wrapper } from '../components/ProfilePage/styled';
import Menu from '../components/Menu/Menu';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/Home/Home';

const HomePage = () => {
  return (
    <Wrapper>
      <Menu />
      <Home />
      <Sidebar type="feed" />
    </Wrapper>
  );
};

export default HomePage;
