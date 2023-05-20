import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import { Wrapper, Logo, Button, Navigation } from './styled';
import MenuUser from '../MenuUser/MenuUser';

const Menu = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation>
        <MenuLink text="Home" />
        <MenuLink text="Explore" />
        <MenuLink text="Notifications" />
        <MenuLink text="Messages" />
        <MenuLink text="Bookmarks" />
        <MenuLink text="Lists" />
        <MenuLink text="Profile" isBold />
        <MenuLink text="More" />
        <Button>Twitter</Button>
      </Navigation>
      <MenuUser />
    </Wrapper>
  );
};

export default Menu;
