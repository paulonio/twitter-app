import React from 'react';
import { SecondaryButton, UsersTitle, UsersWrapper, UserWrapper } from './styled';
import MenuUser from '../MenuUser/MenuUser';
import Button from '../Button/Button';

const SidebarUsers = () => {
  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserWrapper>
        <MenuUser />
        <Button buttonType="secondary">Follow</Button>
      </UserWrapper>
      <SecondaryButton>Show more</SecondaryButton>
    </UsersWrapper>
  );
};

export default SidebarUsers;
