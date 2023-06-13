import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { clearError } from '@src/store/slices/authSlice';
import Modal from '@components/Modal/Modal';

import { Error } from './styled';

interface LoginErrorProps {
  error: string;
}

const LoginError: FC<LoginErrorProps> = ({ error }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <Modal isActive={Boolean(error)} setActive={handleClose}>
      <Error>{error.split('-').join(' ')}</Error>
    </Modal>
  );
};

export default LoginError;
