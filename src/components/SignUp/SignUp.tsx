import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, Form, FormTitle, Input, RecaptchaContainer, SignUpWrapper } from './styled';
import Button from '../Button/Button';
import { auth } from '../../../firebase';
import { SecondaryButton } from '../SidebarUsers/styled';

declare const window: Window &
  typeof globalThis & {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  };

export const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: () => {},
    },
    auth
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [OTP, setOTP] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [state, setState] = useState<'number' | 'verification' | 'password'>('number');

  const handleNavigateToWelcomePage = () => {
    navigate('/');
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

    setState('verification');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const verifyOTP = async (e: ChangeEvent<HTMLInputElement>) => {
    const otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      const confirmationResult = window.confirmationResult;
      await confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          updateProfile(user, { displayName: name }).catch(() => {});
        })
        .catch(() => {});

      setState('password');
    }
  };

  const handleAddPassword = () => {
    const user = auth.currentUser;
    if (user) {
      updatePassword(user, password);
      navigate('/feed');
    }
  };

  return (
    <SignUpWrapper>
      <RecaptchaContainer id="recaptcha-container" />
      <Form onSubmit={onSubmit}>
        <FormTitle>Create an account</FormTitle>
        {state === 'number' && (
          <>
            <Input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <Input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
            <SecondaryButton onClick={handleNavigateToWelcomePage}>Use email</SecondaryButton>
          </>
        )}
        {state === 'verification' && (
          <Input type="text" placeholder="OTP" value={OTP} onChange={verifyOTP} />
        )}
        {state === 'password' && (
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        )}
        {state === 'password' ? (
          <ButtonWrapper onClick={handleAddPassword}>
            <Button buttonType="primary">Submit</Button>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <Button buttonType="primary">Next</Button>
          </ButtonWrapper>
        )}
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
