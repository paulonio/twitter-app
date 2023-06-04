import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { WelcomeSubtitle } from '@components/Welcome/styled';
import { Error, Input } from '@components/SignUp/styled';
import Button from '@components/Button/Button';
import { StyledButton } from '@components/Button/styled';

import { loginRequest } from '@store/saga/authSaga';

import { Form, LoginWrapper } from './styled';

export interface LoginForm {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    dispatch(loginRequest(data));
  };

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <WelcomeSubtitle>Log in to Twitter</WelcomeSubtitle>
        <Input type="text" placeholder="Email" {...register('email')} />
        <Error>{errors.email?.message}</Error>
        <Input type="password" placeholder="Password" {...register('password')} />
        <Error>{errors.password?.message}</Error>
        <Button $buttonType="primary">Log In</Button>
      </Form>
      <StyledButton $buttonType="link" onClick={handleNavigateToWelcomePage}>
        Sign up to Twitter
      </StyledButton>
    </LoginWrapper>
  );
};

export default Login;
