import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@components/Button/Button';
import { StyledButton } from '@components/Button/styled';
import DatePickers from '@components/SignUp/DatePickers';

import { signUpWithEmailRequest } from '@store/actions/actions';

import { EMAIL_REGEXP, NAME_REGEXP } from '@constants/constants';

import { Logo } from '../Menu/styled';
import { ButtonWrapper, Error, Form, FormTitle, Input, SignUpWrapper } from './styled';

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  month: string;
  date: string;
  year: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(3)
      .matches(NAME_REGEXP, 'name should contain only latin letters or numbers')
      .required(),
    email: yup.string().trim().email().matches(EMAIL_REGEXP, 'email must be a valid').required(),
    password: yup.string().trim().min(6).max(20).required(),
    month: yup.string().max(3, 'month is required'),
    date: yup.number().typeError('date is required'),
    year: yup.number().typeError('year is required'),
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
    defaultValues: { month: 'Month', date: 'Date', year: 'Year' },
  });

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    dispatch(signUpWithEmailRequest(data));
  };

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
    <SignUpWrapper>
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create an account</FormTitle>
        <Input type="text" placeholder="Name" {...register('name')} />
        <Error>{errors.name?.message}</Error>
        <Input type="text" placeholder="Email" {...register('email')} />
        <Error>{errors.email?.message}</Error>
        <StyledButton $buttonType="link" onClick={handleNavigateToWelcomePage}>
          Use email
        </StyledButton>
        <DatePickers errors={errors} register={register} />
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
