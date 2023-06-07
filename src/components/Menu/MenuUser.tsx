import React, { FC } from 'react';

import Avatar from '@components/Avatar/Avatar';

import { UserType } from '@store/slices/authSlice';

import { AvatarWrapper, Nickname, UserInfo, Username, UserWrapper } from './styled';

interface MenuUserProps {
  user: UserType;
}

const MenuUser: FC<MenuUserProps> = ({ user }) => {
  return (
    <UserWrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <UserInfo>
        <Username data-testid="username">{user.displayName}</Username>
        <Nickname data-testid="nickname">@{user.email.split('@')[0]}</Nickname>
      </UserInfo>
    </UserWrapper>
  );
};

export default MenuUser;
