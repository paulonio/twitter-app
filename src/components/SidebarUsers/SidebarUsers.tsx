import React from 'react';
import { SecondaryButton, UsersTitle, UsersWrapper, UserRow, ButtonWrapper } from './styled';
import MenuUser from '../MenuUser/MenuUser';
import Button from '../Button/Button';

const SidebarUsers = () => {
  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserRow>
        <MenuUser />
        <ButtonWrapper>
          <Button buttonType="secondary">Follow</Button>
        </ButtonWrapper>
      </UserRow>
      <SecondaryButton>Show more</SecondaryButton>
    </UsersWrapper>
  );
};

export default SidebarUsers;
