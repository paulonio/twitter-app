import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MenuUser from '@components/MenuUser/MenuUser';
import { FixedWrapper } from '@components/Sidebar/styled';
import Nav from '@components/Nav/Nav';
import { StyledButton } from '@components/Button/styled';
import TweetBlockModal from '@components/TweetBlockModal/TweetBlockModal';

import type { StoreType } from '@store/index.ts';
import { User } from '@store/slices/authSlice';

import { Wrapper, Logo, ButtonWrapper } from './styled';

const Menu = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <FixedWrapper>
        <Logo />
        <Nav />
        <TweetBlockModal isActive={isModalOpen} setActive={setModalOpen} />
        <ButtonWrapper>
          <StyledButton $buttonType="primary" onClick={handleOpenModal}>
            Tweet
          </StyledButton>
        </ButtonWrapper>
        {user && <MenuUser user={user} />}
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
