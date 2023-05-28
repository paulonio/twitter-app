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
          <NavLink to="/feed">Home</NavLink>
          <NavLink to="/feed">Explore</NavLink>
          <NavLink to="/feed">Notifications</NavLink>
          <NavLink to="/feed">Messages</NavLink>
          <NavLink to="/feed">Bookmarks</NavLink>
          <NavLink to="/feed">Lists</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/feed">More</NavLink>
          <Button buttonType="primary">Tweet</Button>
        </Navigation>
        <MenuUser />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
