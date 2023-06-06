import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Modal from '@components/Modal/Modal';
import { Input } from '@components/SignUp/styled';
import ChangePassword from '@components/EditUser/ChangePassword';
import Button from '@components/Button/Button';

import { logoutRequest, updateUserRequest } from '@store/actions/actions';
import type { UserType } from '@store/slices/authSlice';
import type { StoreType } from '@store/index.ts';

import { ButtonWrapper, EditForm, RadioLabel, ControlsWrapper } from './styled';

interface EditUserProps {
  isActive: boolean;
  setActive: (value: boolean) => void;
}

export interface EditUserForm {
  name: string;
  lastName: string;
  gender: 'male' | 'female';
  telegram: string;
}

const schema = yup
  .object({
    name: yup.string().trim().min(3).required(),
    lastName: yup.string().trim(),
    telegram: yup.string().trim(),
  })
  .required();

const EditUser: FC<EditUserProps> = ({ isActive, setActive }) => {
  const user = useSelector<StoreType, UserType | null>((state) => state.auth.user);
  const { register, handleSubmit } = useForm<EditUserForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.displayName.split(' ')[0],
      lastName: user?.displayName.split(' ')[1],
      gender: user?.gender,
      telegram: user?.telegram,
    },
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<EditUserForm> = (data) => {
    dispatch(updateUserRequest(data));
  };

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <EditForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Write your name"
          {...register('name')}
          data-testid="input-name"
        />
        <Input type="text" placeholder="Write your last name" {...register('lastName')} />
        <Input type="text" placeholder="Your telegram link" {...register('telegram')} />
        <ControlsWrapper>
          <RadioLabel>
            <Input
              id="male"
              type="radio"
              value="male"
              {...register('gender')}
              data-testid="radio-button"
            />
            Male
          </RadioLabel>
          <RadioLabel>
            <Input id="female" type="radio" value="female" {...register('gender')} />
            Female
          </RadioLabel>
        </ControlsWrapper>
        <ButtonWrapper>
          <Button $buttonType="primary">Submit</Button>
        </ButtonWrapper>
      </EditForm>
      <button type="button" onClick={() => dispatch(logoutRequest())}>
        Log out
      </button>
      <ChangePassword />
    </Modal>
  );
};

export default EditUser;
