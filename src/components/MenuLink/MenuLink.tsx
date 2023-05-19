import React, { FC } from 'react';
import { Icon, SidebarLink, Wrapper } from './styled';

interface MenuLinkProps {
  text: string;
  bold?: boolean;
}

const MenuLink: FC<MenuLinkProps> = ({ text, bold }) => {
  return (
    <Wrapper>
      <Icon text={text} />
      <SidebarLink bold={bold}>{text}</SidebarLink>
    </Wrapper>
  );
};

export default MenuLink;
