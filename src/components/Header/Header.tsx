import React, { FC } from 'react';
import { FixedWrapper } from '../Sidebar/styled';
import { HeaderTitleWrapper, HeaderWrapper } from './styled';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

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
