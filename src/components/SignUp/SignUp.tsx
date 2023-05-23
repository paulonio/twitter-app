import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ButtonWrapper, Form, FormTitle, Input, RecaptchaContainer, SignUpWrapper } from './styled';
import Button from '../Button/Button';
import { auth } from '../../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <SignUpWrapper>
      <RecaptchaContainer id="recaptcha-container" />
      <Form onSubmit={onSubmit}>
        <FormTitle>Create an account</FormTitle>
        <Input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <ButtonWrapper>
          <Button data-id="sign-up-button" buttonType="primary">
            Next
          </Button>
        </ButtonWrapper>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
