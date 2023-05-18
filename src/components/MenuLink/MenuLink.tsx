import React, { FC } from 'react';
import './MenuLink.css';

interface MenuLinkProps {
  text: string;
}

const MenuLink: FC<MenuLinkProps> = ({ text }) => {
  return (
    <div className="link-wrapper">
      <img className="image" src={`/assets/icons/${text}.svg`} alt={text} />
      <div className="link">{text}</div>
    </div>
  );
};

export default MenuLink;
