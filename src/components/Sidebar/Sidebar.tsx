import React from 'react';
import { Wrapper } from './styled';
import SidebarInput from '../SidebarInput/SidebarInput';
import SidebarPosts from '../SidebarPosts/SidebarPosts';
import SidebarUsers from '../SidebarUsers/SidebarUsers';

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarInput />
      <SidebarPosts />
      <SidebarUsers />
    </Wrapper>
  );
};

export default Sidebar;
