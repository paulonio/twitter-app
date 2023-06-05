import React from 'react';
import { useSelector } from 'react-redux';

import MenuUser from '@src/components/Menu/MenuUser';
import { StyledButton } from '@components/Button/styled';

import type { StoreType } from '@store/index.ts';
import { UserType } from '@store/slices/authSlice';

import { UsersTitle, UsersWrapper, UserRow, ButtonWrapper } from './styled';

const SidebarUsers = () => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);

  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserRow>
        {user && <MenuUser user={user} />}
        <ButtonWrapper>
          <StyledButton $buttonType="secondary">Follow</StyledButton>
        </ButtonWrapper>
      </UserRow>
      <StyledButton $buttonType="link">Show more</StyledButton>
    </UsersWrapper>
  );
};

export default SidebarUsers;
