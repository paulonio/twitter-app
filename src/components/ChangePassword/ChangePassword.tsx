import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changePasswordRequest } from '../../store/saga/authSaga';
import Button from '../Button/Button';
import { Input } from '../SignUp/styled';
import { PasswordForm, ButtonWrapper } from './styled';

export interface ChangePasswordForm {
  oldPassword: string;
  newPassword: string;
}

const ChangePassword = () => {
  const { register, handleSubmit } = useForm<ChangePasswordForm>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ChangePasswordForm> = (data) => {
    dispatch(changePasswordRequest(data));
  };

  return (
    <PasswordForm onSubmit={handleSubmit(onSubmit)}>
      <Input type="password" placeholder="Old password" {...register('oldPassword')} />
      <Input type="password" placeholder="New password" {...register('newPassword')} />
      <ButtonWrapper>
        <Button buttonType="primary">Change password</Button>
      </ButtonWrapper>
    </PasswordForm>
  );
};

export default ChangePassword;
