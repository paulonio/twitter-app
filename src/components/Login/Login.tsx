import React, { useState, ChangeEvent, FormEventHandler } from 'react';
import { RecaptchaVerifier, ConfirmationResult, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form } from './styled';
import { WelcomeSubtitle } from '../Welcome/styled';
import { Input, RecaptchaContainer } from '../SignUp/styled';
import Button from '../Button/Button';
import { SecondaryButton } from '../SidebarUsers/styled';
import { generateRecaptcha } from '../SignUp/SignUp';
import { auth } from '../../../firebase';

declare const window: Window &
  typeof globalThis & {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  };

const Login = () => {
  const navigate = useNavigate();
  // TODO names
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [OTP, setOTP] = useState<string>('');

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleOTPChange = (e: ChangeEvent<HTMLInputElement>) => {
    const otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          if (user) {
            navigate('/feed');
          }
        })
        .catch(() => {});
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    await signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult: ConfirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch(() => {});
  };

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
    <Form onSubmit={onSubmit}>
      <RecaptchaContainer id="recaptcha-container" />
      <WelcomeSubtitle>Log in to Twitter</WelcomeSubtitle>
      <Input type="text" placeholder="Phone number" value={phone} onChange={handlePhoneChange} />
      <Input type="text" placeholder="OTP" value={OTP} onChange={handleOTPChange} />
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
