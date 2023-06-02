import React from 'react';
import MenuUser from '../MenuUser/MenuUser';
import { Wrapper, Logo, ButtonWrapper } from './styled';
import { FixedWrapper } from '../Sidebar/styled';
import Nav from '../Nav/Nav';
import { StyledButton } from '../Button/styled';

const Menu = () => {
  return (
    <Wrapper>
      <FixedWrapper>
        <Logo />
        <Nav />
        <ButtonWrapper>
          <StyledButton $buttonType="primary">Tweet</StyledButton>
        </ButtonWrapper>
        <MenuUser />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
