import React from 'react';
import Avatar from '../Avatar/Avatar';
import { AvatarRow, AvatarWrapper, BorderedButton } from './styled';

const ProfileUserHeader = () => {
  return (
    <AvatarRow>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <BorderedButton>Edit profile</BorderedButton>
    </AvatarRow>
  );
};

export default ProfileUserHeader;
