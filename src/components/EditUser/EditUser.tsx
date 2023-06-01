import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';
import { Input } from '../SignUp/styled';
import Button from '../Button/Button';
import { ButtonWrapper, EditForm, RadioLabel, ControlsWrapper } from './styled';
import ChangePassword from '../ChangePassword/ChangePassword';
import { updateUserRequest } from '../../store/saga/authSaga';
import { User, logout } from '../../store/slices/authSlice';
import { StoreType } from '../../store';

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

const EditUser: FC<EditUserProps> = ({ isActive, setActive }) => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const { register, handleSubmit } = useForm<EditUserForm>({
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
        <Input type="text" placeholder="Write your name" {...register('name')} />
        <Input type="text" placeholder="Write your last name" {...register('lastName')} />
        <Input type="text" placeholder="Your telegram link" {...register('telegram')} />
        <ControlsWrapper>
          <RadioLabel>
            <Input id="male" type="radio" value="male" {...register('gender')} />
            Male
          </RadioLabel>
          <RadioLabel>
            <Input id="female" type="radio" value="female" {...register('gender')} />
            Female
          </RadioLabel>
          <ButtonWrapper>
            <Button buttonType="primary">Submit</Button>
          </ButtonWrapper>
        </ControlsWrapper>
      </EditForm>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
      <ChangePassword />
    </Modal>
  );
};

export default EditUser;
