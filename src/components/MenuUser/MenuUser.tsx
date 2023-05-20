import React from 'react';
import { Avatar, Image, Nickname, UserInfo, Username, Wrapper } from './styled';

const MenuUser = () => {
  return (
    <Wrapper>
      <Avatar>
        <Image />
      </Avatar>
      <UserInfo>
        <Username>Bobur</Username>
        <Nickname>@bobur_mavlonov</Nickname>
      </UserInfo>
    </Wrapper>
  );
};

export default MenuUser;
