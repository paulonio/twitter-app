import React from 'react';
import { useSelector } from 'react-redux';
import { AvatarWrapper, Nickname, UserInfo, Username, Wrapper } from './styled';
import Avatar from '../Avatar/Avatar';
import { StoreType } from '../../store';
import { User } from '../../store/slices/authSlice';

const MenuUser = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <UserInfo>
        <Username>{user?.displayName || 'Bobur'}</Username>
        <Nickname>@{user?.email?.split('@')[0] || '@bobur_user'}</Nickname>
      </UserInfo>
    </Wrapper>
  );
};

export default MenuUser;
