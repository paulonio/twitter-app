import React from 'react';
import { SecondaryButton, UsersButton, UsersTitle, UsersWrapper, UserWrapper } from './styled';
import MenuUser from '../MenuUser/MenuUser';

const SidebarUsers = () => {
  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserWrapper>
        <MenuUser />
        <UsersButton>Follow</UsersButton>
      </UserWrapper>
      <SecondaryButton>Show more</SecondaryButton>
    </UsersWrapper>
  );
};

export default SidebarUsers;
