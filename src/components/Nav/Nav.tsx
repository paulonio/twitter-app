import React from 'react';

import { NAVIGATION } from '@constants/constants';

import { Navigation, NavigationLink } from './styled';

const Nav = () => {
  return (
    <Navigation>
      {NAVIGATION.map(({ to, text, Component }) => (
        <NavigationLink key={text} to={to} data-testid="nav-link">
          <Component />
          {text}
        </NavigationLink>
      ))}
    </Navigation>
  );
};

export default Nav;
