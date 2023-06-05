import React, { FC, useState } from 'react';

import { FixedWrapper } from '@components/Sidebar/styled';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import Burger from '@components/Burger/Burger';
import { BurgerMenu } from '@components/Burger/styled';
import Nav from '@components/Nav/Nav';

import { HeaderTitleWrapper, HeaderWrapper, ThemeSwitcherWrapper } from './styled';

interface HeaderProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Header: FC<HeaderProps> = ({ children }) => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <FixedWrapper>
      <HeaderWrapper>
        <HeaderTitleWrapper>{children}</HeaderTitleWrapper>
        <ThemeSwitcherWrapper>
          <ThemeSwitcher />
        </ThemeSwitcherWrapper>
        <Burger $isActive={burgerOpen} onClick={toggleBurger} />
        <BurgerMenu $isActive={burgerOpen}>
          <Nav />
          <ThemeSwitcher />
        </BurgerMenu>
      </HeaderWrapper>
    </FixedWrapper>
  );
};

export default Header;
