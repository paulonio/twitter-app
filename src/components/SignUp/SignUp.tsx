import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonWrapper, Form, FormTitle, Input, SignUpWrapper } from './styled';
import Button from '../Button/Button';
import { SecondaryButton } from '../SidebarUsers/styled';
import { signUpWithEmail } from '../../store/slices/authSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(signUpWithEmail({ email, password, name }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <SignUpWrapper>
      <Form onSubmit={onSubmit}>
        <FormTitle>Create an account</FormTitle>
        <Input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <Input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        <SecondaryButton onClick={handleNavigateToWelcomePage}>Use email</SecondaryButton>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <ButtonWrapper>
          <Button buttonType="primary">Sign up</Button>
        </ButtonWrapper>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
