import React, { FC } from 'react';

import Avatar from '@components/Avatar/Avatar';

import { User } from '@store/slices/authSlice';

import { AvatarWrapper, Nickname, UserInfo, Username, Wrapper } from './styled';

interface MenuUserProps {
  user: User;
}

const MenuUser: FC<MenuUserProps> = ({ user }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <UserInfo>
        <Username>{user.displayName}</Username>
        <Nickname>@{user.email.split('@')[0]}</Nickname>
      </UserInfo>
    </Wrapper>
  );
};

export default MenuUser;
