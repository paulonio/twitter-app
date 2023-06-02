import React from 'react';
import { useSelector } from 'react-redux';
import MenuUser from '../MenuUser/MenuUser';
import { Wrapper, Logo, ButtonWrapper } from './styled';
import { FixedWrapper } from '../Sidebar/styled';
import Nav from '../Nav/Nav';
import { StyledButton } from '../Button/styled';
import type { StoreType } from '../../store';
import { User } from '../../store/slices/authSlice';

const Menu = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <Wrapper>
      <FixedWrapper>
        <Logo />
        <Nav />
        <ButtonWrapper>
          <StyledButton $buttonType="primary">Tweet</StyledButton>
        </ButtonWrapper>
        {user && <MenuUser user={user} />}
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
