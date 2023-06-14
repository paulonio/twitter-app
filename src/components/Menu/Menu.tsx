import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MenuUser from '@src/components/Menu/MenuUser';
import { FixedWrapper } from '@components/Sidebar/styled';
import Nav from '@components/Nav/Nav';
import Button from '@components/Button/Button';
import TweetBlockModal from '@src/components/TweetBlock/TweetBlockModal';

import type { StoreType } from '@store/index.ts';
import type { UserType } from '@store/slices/authSlice';

import { Wrapper, Logo, ButtonWrapper } from './styled';

const Menu = () => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);
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
          <Button $buttonType="primary" onClick={handleOpenModal} data-testid="menu-button">
            Tweet
          </Button>
        </ButtonWrapper>
        {user && <MenuUser user={user} />}
      </FixedWrapper>
    </Wrapper>
  );
};

export default Menu;
