import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Explore</NavLink>
          <NavLink to="/">Notifications</NavLink>
          <NavLink to="/">Messages</NavLink>
          <NavLink to="/">Bookmarks</NavLink>
          <NavLink to="/">Lists</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/">More</NavLink>
          <Button buttonType="primary">Tweet</Button>
        </Navigation>
        <MenuUser />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
