import React from 'react';
import { AvatarWrapper, Nickname, UserInfo, Username, Wrapper } from './styled';
import Avatar from '../Avatar/Avatar';

const MenuUser = () => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <UserInfo>
        <Username>Bobur</Username>
        <Nickname>@bobur_mavlonov</Nickname>
      </UserInfo>
    </Wrapper>
  );
};

export default MenuUser;
