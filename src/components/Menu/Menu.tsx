import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuUser from '../MenuUser/MenuUser';
import { Wrapper, Logo, ButtonWrapper } from './styled';
import { FixedWrapper } from '../Sidebar/styled';
import Nav from '../Nav/Nav';
import { StyledButton } from '../Button/styled';
import type { StoreType } from '../../store';
import { User } from '../../store/slices/authSlice';
import TweetBlockModal from '../TweetBlockModal/TweetBlockModal';

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
