import React from 'react';
import { FixedWrapper, Wrapper } from './styled';
import SidebarInput from '../SidebarInput/SidebarInput';
import SidebarPosts from '../SidebarPosts/SidebarPosts';
import SidebarUsers from '../SidebarUsers/SidebarUsers';

const Sidebar = () => {
  return (
    <Wrapper>
      <FixedWrapper>
        <SidebarInput />
        <SidebarPosts />
        <SidebarUsers />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Sidebar;
