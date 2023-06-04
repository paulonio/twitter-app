import React from 'react';

import Menu from '@components/Menu/Menu';
import Profile from '@components/Profile/Profile';
import Sidebar from '@components/Sidebar/Sidebar';
import { PageWrapper } from '@components/Profile/styled';

const ProfilePage = () => {
  return (
    <PageWrapper>
      <Menu />
      <Profile />
      <Sidebar type="profile" />
    </PageWrapper>
  );
};

export default ProfilePage;
