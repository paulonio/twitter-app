import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';
import { Input } from '../SignUp/styled';
import Button from '../Button/Button';
import { ButtonWrapper, EditForm, RadioLabel, ControlsWrapper } from './styled';
import ChangePassword from '../ChangePassword/ChangePassword';

interface EditUserProps {
  isActive: boolean;
  setActive: (value: boolean) => void;
}

interface EditUserForm {
  name: string;
  lastName: string;
  sex: 'male' | 'female';
  telegram: string;
}

const EditUser: FC<EditUserProps> = ({ isActive, setActive }) => {
  const { register, handleSubmit } = useForm<EditUserForm>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<EditUserForm> = (data) => {
    // dispatch(updateUserBio(data));
  };

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <EditForm onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Write your name" {...register('name')} />
        <Input type="text" placeholder="Write your last name" {...register('lastName')} />
        <Input type="text" placeholder="Your telegram link" {...register('telegram')} />
        <ControlsWrapper>
          <RadioLabel>
            <Input id="male" type="radio" value="male" {...register('sex')} />
            Male
          </RadioLabel>
          <RadioLabel>
            <Input id="female" type="radio" value="female" {...register('sex')} />
            Female
          </RadioLabel>
          <ButtonWrapper>
            <Button buttonType="primary">Submit</Button>
          </ButtonWrapper>
        </ControlsWrapper>
      </EditForm>
      <ChangePassword />
    </Modal>
  );
};

export default EditUser;
