import React, { FC } from 'react';

import { SELECT_YEAR_DATA } from '@src/constants/constants';

import type { SelectProps } from './DatePickers';

import { Select, Option } from './styled';

const YearSelect: FC<SelectProps> = ({ register }) => {
  return (
    <Select {...register('year')}>
      {SELECT_YEAR_DATA.map((year, idx) => (
        <Option key={year} value={year} disabled={idx === 0}>
          {year}
        </Option>
      ))}
    </Select>
  );
};

export default YearSelect;
