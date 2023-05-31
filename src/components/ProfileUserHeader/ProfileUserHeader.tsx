import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import { AvatarRow, AvatarWrapper, BorderedButton } from './styled';
// import { logout } from '../../store/slices/authSlice';
import EditUser from '../EditUser/EditUser';

const ProfileUserHeader = () => {
  // const dispatch = useDispatch();
  const [isActive, setActive] = useState<boolean>(false);

  const handleOpenModal = () => {
    setActive(true);
  };

  // const handleEditClick = () => {
  //   dispatch(logout());
  // };

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
