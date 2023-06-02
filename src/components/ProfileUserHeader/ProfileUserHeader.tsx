import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import { AvatarRow, AvatarWrapper, BorderedButton } from './styled';
import EditUser from '../EditUser/EditUser';

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
      <BorderedButton onClick={handleOpenModal}>Edit profile</BorderedButton>
    </AvatarRow>
  );
};

export default ProfileUserHeader;
