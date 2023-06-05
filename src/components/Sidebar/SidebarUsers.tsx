import React from 'react';
import { useSelector } from 'react-redux';

import MenuUser from '@src/components/Menu/MenuUser';
import Button from '@components/Button/Button';

import type { StoreType } from '@store/index.ts';
import type { UserType } from '@store/slices/authSlice';

import { UsersTitle, UsersWrapper, UserRow, ButtonWrapper } from './styled';

const SidebarUsers = () => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);

  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserRow>
        {user && <MenuUser user={user} />}
        <ButtonWrapper>
          <Button $buttonType="secondary">Follow</Button>
        </ButtonWrapper>
      </UserRow>
      <Button $buttonType="link">Show more</Button>
    </UsersWrapper>
  );
};

export default SidebarUsers;
