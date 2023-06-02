import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonWrapper, Error, Form, FormTitle, Input, SignUpWrapper } from './styled';
import Button from '../Button/Button';
import { SecondaryButton } from '../SidebarUsers/styled';
import { signUpWithEmailRequest } from '../../store/saga/authSaga';

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup
  .object({
    name: yup.string().trim().min(3).required(),
    email: yup.string().trim().email().matches(regexp, 'email must be a valid email').required(),
    password: yup.string().trim().min(6).max(20).required(),
  })
  .required();

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    dispatch(signUpWithEmailRequest(data));
  };

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
    <SignUpWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create an account</FormTitle>
        <Input type="text" placeholder="Name" {...register('name')} />
        <Error>{errors.name?.message}</Error>
        <Input type="text" placeholder="Email" {...register('email')} />
        <Error>{errors.email?.message}</Error>
        <SecondaryButton onClick={handleNavigateToWelcomePage}>Use email</SecondaryButton>
        <Input type="password" placeholder="Password" {...register('password')} />
        <Error>{errors.password?.message}</Error>
        <ButtonWrapper>
          <Button $buttonType="primary">Sign up</Button>
        </ButtonWrapper>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
