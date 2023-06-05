import React, { useState } from 'react';

import Avatar from '@components/Avatar/Avatar';
import EditUser from '@components/EditUser/EditUser';
import Button from '@components/Button/Button';

import { AvatarRow, AvatarWrapper, ButtonWrapper } from './styled';

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
        <Button $buttonType="bordered" onClick={handleOpenModal}>
          Edit profile
        </Button>
      </ButtonWrapper>
    </AvatarRow>
  );
};

export default ProfileUserHeader;
