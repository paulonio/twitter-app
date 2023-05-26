import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, Form, FormTitle, Input, SignUpWrapper } from './styled';
import Button from '../Button/Button';
import { auth } from '../../../firebase';
import { SecondaryButton } from '../SidebarUsers/styled';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const userAuth = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userAuth.user, { displayName: name });
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      setEmail('');
      setName('');
      setPassword('');
    }
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
