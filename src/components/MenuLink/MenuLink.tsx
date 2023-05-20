import React, { FC } from 'react';
import { Icon, SidebarLink, Wrapper } from './styled';

interface MenuLinkProps {
  text: string;
  isBold?: boolean;
}

const MenuLink: FC<MenuLinkProps> = ({ text, isBold }) => {
  return (
    <Wrapper>
      <Icon text={text} />
      <SidebarLink isBold={isBold}>{text}</SidebarLink>
    </Wrapper>
  );
};

export default MenuLink;
