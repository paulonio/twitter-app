import React, { ChangeEvent, FC } from 'react';

import SidebarResults from '@src/components/Sidebar/SidebarResults';

import type { TweetType } from '@store/slices/tweetSlice';
import type { UserType } from '@store/slices/authSlice';

import { Label, SearchField, SearchIcon, InputWrapper } from './styled';

interface SidebarInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: TweetType[] | UserType[];
}

const SidebarInput: FC<SidebarInputProps> = ({ value, onChange, data }) => {
  return (
    <InputWrapper>
      <Label>
        <SearchIcon />
        <SearchField value={value} onChange={onChange} data-testid="search" />
        {data && value && <SidebarResults data={data} />}
      </Label>
    </InputWrapper>
  );
};

export default SidebarInput;
