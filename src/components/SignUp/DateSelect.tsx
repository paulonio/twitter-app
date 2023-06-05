import React, { FC } from 'react';

import { SELECT_DATE_DATA } from '@src/constants/constants';

import type { SelectProps } from './DatePickers';

import { Select, Option } from './styled';

const DateSelect: FC<SelectProps> = ({ register }) => {
  return (
    <Select {...register('date')}>
      {SELECT_DATE_DATA.map((date, idx) => (
        <Option key={date} value={date} disabled={idx === 0}>
          {date}
        </Option>
      ))}
    </Select>
  );
};

export default DateSelect;
