import React from 'react';
import { useSelector } from 'react-redux';
import { SecondaryButton, UsersTitle, UsersWrapper, UserRow, ButtonWrapper } from './styled';
import MenuUser from '../MenuUser/MenuUser';
import { StyledButton } from '../Button/styled';
import { StoreType } from '../../store';
import { User } from '../../store/slices/authSlice';

const SidebarUsers = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <UsersWrapper>
      <UsersTitle>You might like</UsersTitle>
      <UserRow>
        {user && <MenuUser user={user} />}
        <ButtonWrapper>
          <StyledButton $buttonType="secondary">Follow</StyledButton>
        </ButtonWrapper>
      </UserRow>
      <SecondaryButton>Show more</SecondaryButton>
    </UsersWrapper>
  );
};

export default SidebarUsers;
