import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import { Wrapper, Logo, Button } from './styled';

const Menu = () => {
  return (
    <Wrapper>
      <Logo />
      <MenuLink text="Home" />
      <MenuLink text="Explore" />
      <MenuLink text="Notifications" />
      <MenuLink text="Messages" />
      <MenuLink text="Bookmarks" />
      <MenuLink text="Lists" />
      <MenuLink text="Profile" bold />
      <MenuLink text="More" />
      <Button>Twitter</Button>
    </Wrapper>
  );
};

export default Menu;
