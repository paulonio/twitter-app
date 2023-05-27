import React, { useState, ChangeEvent, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from './styled';
import { WelcomeSubtitle } from '../Welcome/styled';
import { Input, RecaptchaContainer } from '../SignUp/styled';
import Button from '../Button/Button';
import { SecondaryButton } from '../SidebarUsers/styled';
import { login } from '../../store/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <RecaptchaContainer id="recaptcha-container" />
        <WelcomeSubtitle>Log in to Twitter</WelcomeSubtitle>
        <Input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button buttonType="primary">Log In</Button>
      </Form>
      <SecondaryButton onClick={handleNavigateToWelcomePage}>Sign up to Twitter</SecondaryButton>
    </>
  );
};

export default Login;
