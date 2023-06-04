import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ButtonWrapper,
  Error,
  Form,
  FormTitle,
  Input,
  SignUpWrapper,
  Select,
  Option,
  SelectWrapper,
  HalfSelectWrapper,
  QuarterSelectWrapper,
} from './styled';
import Button from '../Button/Button';
import { signUpWithEmailRequest } from '../../store/saga/authSaga';
import { SELECT_DATE_DATA, SELECT_MONTH_DATA, SELECT_YEAR_DATA } from '../../constants/constants';
import { StyledButton } from '../Button/styled';

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  month: string;
  date: string;
  year: string;
}

const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup
  .object({
    name: yup.string().trim().min(3).required(),
    email: yup.string().trim().email().matches(regexp, 'email must be a valid email').required(),
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create an account</FormTitle>
        <Input type="text" placeholder="Name" {...register('name')} />
        <Error>{errors.name?.message}</Error>
        <Input type="text" placeholder="Email" {...register('email')} />
        <Error>{errors.email?.message}</Error>
        <StyledButton $buttonType="link" onClick={handleNavigateToWelcomePage}>
          Use email
        </StyledButton>
        <SelectWrapper>
          <HalfSelectWrapper>
            <Select {...register('month')}>
              {SELECT_MONTH_DATA.map((month, idx) => (
                <Option key={month} value={month} disabled={idx === 0}>
                  {month}
                </Option>
              ))}
            </Select>
            <Error>{errors.month?.message}</Error>
          </HalfSelectWrapper>
          <QuarterSelectWrapper>
            <Select {...register('date')}>
              {SELECT_DATE_DATA.map((date, idx) => (
                <Option key={date} value={date} disabled={idx === 0}>
                  {date}
                </Option>
              ))}
            </Select>
            <Error>{errors.date?.message}</Error>
          </QuarterSelectWrapper>
          <QuarterSelectWrapper>
            <Select {...register('year')}>
              {SELECT_YEAR_DATA.map((year, idx) => (
                <Option key={year} value={year} disabled={idx === 0}>
                  {year}
                </Option>
              ))}
            </Select>
            <Error>{errors.year?.message}</Error>
          </QuarterSelectWrapper>
        </SelectWrapper>
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
