import React, { FC } from 'react';
import { HeaderWrapper } from './styled';

interface HeaderProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Header: FC<HeaderProps> = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;
