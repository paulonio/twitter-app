import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import Button from '../Button/Button';
import { Input } from '../SignUp/styled';
import { PasswordForm, ButtonWrapper } from './styled';
import { auth } from '../../../firebase';

interface ChangePasswordForm {
  oldPassword: string;
  newPassword: string;
}

const updatePasswordRequest = async (newPassword: string, oldPassword: string) => {
  const user = auth.currentUser;
  console.log(user);
  try {
    if (user && user.email) {
      const creds = EmailAuthProvider.credential(user?.email, oldPassword);
      await reauthenticateWithCredential(user, creds);
      await updatePassword(user, newPassword);
      await auth.signOut();
    }
  } catch (error) {
    console.log(error);
  }
};

const ChangePassword = () => {
  const { register, handleSubmit } = useForm<ChangePasswordForm>();

  const onSubmit: SubmitHandler<ChangePasswordForm> = (data) => {
    updatePasswordRequest(data.newPassword, data.oldPassword);
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
