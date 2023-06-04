import React from 'react';
import { NAVIGATION } from '../../constants/constants';
import { Navigation, NavigationLink } from './styled';

const Nav = () => {
  return (
    <Navigation>
      {NAVIGATION.map(({ to, text, Component }) => (
        <NavigationLink to={to}>
          <Component />
          {text}
        </NavigationLink>
      ))}
    </Navigation>
  );
};

export default Nav;
