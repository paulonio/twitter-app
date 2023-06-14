import React from 'react';

import Menu from '@components/Menu/Menu';
import Sidebar from '@components/Sidebar/Sidebar';
import Home from '@components/Home/Home';
import { PageWrapper } from '@components/Profile/styled';

const HomePage = () => {
  return (
    <PageWrapper>
      <Menu />
      <Home />
      <Sidebar type="feed" />
    </PageWrapper>
  );
};

export default HomePage;
