import React, { FC } from 'react';

import { SELECT_MONTH_DATA } from '@src/constants/constants';

import type { SelectProps } from './DatePickers';

import { Select, Option } from './styled';

const MonthSelect: FC<SelectProps> = ({ register }) => {
  return (
    <Select {...register('month')} data-testid="select">
      {SELECT_MONTH_DATA.map((month, idx) => (
        <Option key={month} value={month} disabled={idx === 0}>
          {month}
        </Option>
      ))}
    </Select>
  );
};

export default MonthSelect;
