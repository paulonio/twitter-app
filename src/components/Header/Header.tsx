import React, { FC } from 'react';
import { FixedWrapper } from '../Sidebar/styled';
import { HeaderWrapper } from './styled';

interface HeaderProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <FixedWrapper>
      <HeaderWrapper>{children}</HeaderWrapper>
    </FixedWrapper>
  );
};

export default Header;
