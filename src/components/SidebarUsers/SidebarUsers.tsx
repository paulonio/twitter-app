import React from 'react';
import { SecondaryButton, UsersTitle, UsersWrapper, UserRow, ButtonWrapper } from './styled';
import MenuUser from '../MenuUser/MenuUser';
import { StyledButton } from '../Button/styled';

const SidebarUsers = () => {
  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserRow>
        <MenuUser />
        <ButtonWrapper>
          <StyledButton $buttonType="secondary">Follow</StyledButton>
        </ButtonWrapper>
      </UserRow>
      <SecondaryButton>Show more</SecondaryButton>
    </UsersWrapper>
  );
};

export default SidebarUsers;
