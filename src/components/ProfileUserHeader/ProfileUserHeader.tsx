import React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import { AvatarRow, AvatarWrapper, BorderedButton } from './styled';
import { logout } from '../../store/slices/authSlice';

const ProfileUserHeader = () => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(logout());
  };

  return (
    <AvatarRow>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <BorderedButton onClick={handleEditClick}>Edit profile</BorderedButton>
    </AvatarRow>
  );
};

export default ProfileUserHeader;
