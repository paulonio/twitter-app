import React from 'react';
import { TweetHeaderWrapper, TweetTitle, EditButton, EditIcon } from './styled';
import { Nickname, Username } from '../MenuUser/styled';

const TweetHeader = () => {
  return (
    <TweetHeaderWrapper>
      <TweetTitle>
        <Username>Bobur</Username>
        <Nickname>@bobur_mavlonov · Apr 1</Nickname>
      </TweetTitle>
      <EditButton>
        <EditIcon />
      </EditButton>
    </TweetHeaderWrapper>
  );
};

export default TweetHeader;
