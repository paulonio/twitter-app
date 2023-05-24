import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from 'firebase/auth';
import { ButtonWrapper, Form, FormTitle, Input, RecaptchaContainer, SignUpWrapper } from './styled';
import Button from '../Button/Button';
import { auth } from '../../../firebase';

declare const window: Window &
  typeof globalThis & {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  };

const generateRecaptcha = () => {
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
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [OTP, setOTP] = useState<string>('');
  const [isRequested, setRequested] = useState<boolean>(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    setRequested(true);

    await signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult: ConfirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch(() => {});
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
  };

  const verifyOTP = (e: ChangeEvent<HTMLInputElement>) => {
    const otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      const confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          updateProfile(user, { displayName: name }).catch(() => {});
        })
        .catch(() => {});
    }
  };

  return (
    <SignUpWrapper>
      <RecaptchaContainer id="recaptcha-container" />
      <Form onSubmit={onSubmit}>
        <FormTitle>Create an account</FormTitle>
        <Input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <Input type="text" placeholder="Phone number" value={phone} onChange={handlePhoneChange} />
        {isRequested && <Input type="text" placeholder="OTP" value={OTP} onChange={verifyOTP} />}
        <ButtonWrapper>
          <Button buttonType="primary">Next</Button>
        </ButtonWrapper>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
