import React, { ChangeEvent, FC } from 'react';

import SidebarResults from '@components/SidebarResults/SidebarResults';

import type { TweetType } from '@store/slices/tweetSlice';
import type { UserType } from '@store/slices/authSlice';

import { Label, SearchField, SearchIcon, Wrapper } from './styled';

interface SidebarInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: TweetType[] | UserType[];
}

const SidebarInput: FC<SidebarInputProps> = ({ value, onChange, data }) => {
  return (
    <Wrapper>
      <Label>
        <SearchIcon />
        <SearchField value={value} onChange={onChange} />
        {data && value && <SidebarResults data={data} />}
      </Label>
    </Wrapper>
  );
};

export default SidebarInput;
