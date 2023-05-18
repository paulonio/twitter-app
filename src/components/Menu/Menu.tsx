import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import './Menu.css';

const Menu = () => {
  return (
    <aside className="menu">
      <MenuLink text="Home" />
      <MenuLink text="Explore" />
      <MenuLink text="Notifications" />
      <MenuLink text="Messages" />
      <MenuLink text="Bookmarks" />
      <MenuLink text="Lists" />
      <MenuLink text="Profile" />
      <MenuLink text="More" />
    </aside>
  );
};

export default Menu;
