import React, { FC } from 'react';

import { FixedWrapper } from '@components/Sidebar/styled';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';

import { HeaderTitleWrapper, HeaderWrapper } from './styled';

interface HeaderProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <FixedWrapper>
      <HeaderWrapper>
        <HeaderTitleWrapper>{children}</HeaderTitleWrapper>
        <ThemeSwitcher />
      </HeaderWrapper>
    </FixedWrapper>
  );
};

export default Header;
