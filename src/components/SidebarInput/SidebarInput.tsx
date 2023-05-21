import React from 'react';
import { Label, SearchField, SearchIcon, Wrapper } from './styled';

const SidebarInput = () => {
  return (
    <Wrapper>
      <Label>
        <SearchIcon />
        <SearchField />
      </Label>
    </Wrapper>
  );
};

export default SidebarInput;
