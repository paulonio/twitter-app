import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import { AvatarRow, AvatarWrapper, ButtonWrapper } from './styled';
import EditUser from '../EditUser/EditUser';
import { StyledButton } from '../Button/styled';

const ProfileUserHeader = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleOpenModal = () => {
    setActive(true);
  };

  return (
    <AvatarRow>
      <EditUser isActive={isActive} setActive={setActive} />
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <ButtonWrapper>
        <StyledButton $buttonType="bordered" onClick={handleOpenModal}>
          Edit profile
        </StyledButton>
      </ButtonWrapper>
    </AvatarRow>
  );
};

export default ProfileUserHeader;
