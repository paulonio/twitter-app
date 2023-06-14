import React, { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import MonthSelect from './MonthSelect';
import DateSelect from './DateSelect';
import YearSelect from './YearSelect';

import type { SignUpForm } from './SignUp';

import { SelectWrapper, HalfSelectWrapper, QuarterSelectWrapper, Error } from './styled';

export interface SelectProps {
  errors?: FieldErrors<SignUpForm>;
  register: UseFormRegister<SignUpForm>;
}

const DatePickers: FC<SelectProps> = ({ errors, register }) => {
  return (
    <SelectWrapper>
      <HalfSelectWrapper>
        <MonthSelect register={register} />
        <Error>{errors?.month?.message}</Error>
      </HalfSelectWrapper>
      <QuarterSelectWrapper>
        <DateSelect register={register} />
        <Error>{errors?.date?.message}</Error>
      </QuarterSelectWrapper>
      <QuarterSelectWrapper>
        <YearSelect register={register} />
        <Error>{errors?.year?.message}</Error>
      </QuarterSelectWrapper>
    </SelectWrapper>
  );
};

export default DatePickers;
