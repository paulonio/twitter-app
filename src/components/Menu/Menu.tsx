import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import MenuUser from '../MenuUser/MenuUser';
import Button from '../Button/Button';
import { Wrapper, Logo, Navigation } from './styled';
import { FixedWrapper } from '../Sidebar/styled';

const Menu = () => {
  return (
    <Wrapper>
      <FixedWrapper>
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
          <Button buttonType="primary">Tweet</Button>
        </Navigation>
        <MenuUser />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
