import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '@components/SignUp/styled';
import { StyledButton } from '@components/Button/styled';

import { changePasswordRequest } from '@store/actions/actions';

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
        <StyledButton $buttonType="primary">Change password</StyledButton>
      </ButtonWrapper>
    </PasswordForm>
  );
};

export default ChangePassword;
