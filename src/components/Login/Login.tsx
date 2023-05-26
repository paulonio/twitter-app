import React, { useState, ChangeEvent, FormEventHandler } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from './styled';
import { WelcomeSubtitle } from '../Welcome/styled';
import { Input, RecaptchaContainer } from '../SignUp/styled';
import Button from '../Button/Button';
import { SecondaryButton } from '../SidebarUsers/styled';
import { auth } from '../../../firebase';
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

    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
        })
      );
      navigate('/feed');
    } catch (error) {
      dispatch(login(null));
    }
  };

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
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
      <SecondaryButton onClick={handleNavigateToWelcomePage}>Sign up to Twitter</SecondaryButton>
    </Form>
  );
};

export default Login;
