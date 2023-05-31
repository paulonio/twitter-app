import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { Input } from '../SignUp/styled';
import Button from '../Button/Button';
import { ButtonWrapper, EditForm } from './styled';
import { updateUserBio } from '../../store/slices/authSlice';

interface EditUserProps {
  isActive: boolean;
  setActive: (value: boolean) => void;
}

const EditUser: FC<EditUserProps> = ({ isActive, setActive }) => {
  const [bio, setBio] = useState<string>('');
  const dispatch = useDispatch();

  const handleBioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBio(value);
  };

  const handleSubmit = () => {
    dispatch(updateUserBio({ bio }));
  };

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <EditForm onSubmit={handleSubmit}>
        <Input value={bio} onChange={handleBioChange} placeholder="Write info about you" />
        <ButtonWrapper>
          <Button buttonType="primary">Submit</Button>
        </ButtonWrapper>
      </EditForm>
    </Modal>
  );
};

export default EditUser;
