import React, { FC } from 'react';
import { AvatarWrapper, Nickname, UserInfo, Username, Wrapper } from './styled';
import Avatar from '../Avatar/Avatar';
import { User } from '../../store/slices/authSlice';

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
