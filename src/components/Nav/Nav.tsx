import React from 'react';
import { Navigation, NavigationLink } from './styled';
import HomeIcon from '../../icons/HomeIcon';
import ExploreIcon from '../../icons/ExploreIcon';
import NotificationsIcon from '../../icons/NotificationsIcon';
import MessagesIcon from '../../icons/MessagesIcon';
import BookmarksIcon from '../../icons/BookmarksIcon';
import ProfileIcon from '../../icons/ProfileIcon';
import MoreIcon from '../../icons/MoreIcon';
import ListsIcon from '../../icons/ListsIcon';

const Nav = () => {
  return (
    <Navigation>
      <NavigationLink to="/feed">
        <HomeIcon />
        Home
      </NavigationLink>
      <NavigationLink to="/feed">
        <ExploreIcon />
        Explore
      </NavigationLink>
      <NavigationLink to="/feed">
        <NotificationsIcon />
        Notifications
      </NavigationLink>
      <NavigationLink to="/feed">
        <MessagesIcon />
        Messages
      </NavigationLink>
      <NavigationLink to="/feed">
        <BookmarksIcon />
        Bookmarks
      </NavigationLink>
      <NavigationLink to="/feed">
        <ListsIcon />
        Lists
      </NavigationLink>
      <NavigationLink to="/profile">
        <ProfileIcon />
        Profile
      </NavigationLink>
      <NavigationLink to="/feed">
        <MoreIcon />
        More
      </NavigationLink>
    </Navigation>
  );
};

export default Nav;
