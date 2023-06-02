import React, { FC } from 'react';
import { TweetHeaderWrapper, TweetTitle, EditButton } from './styled';
import { Nickname, Username } from '../MenuUser/styled';
import { TweetType } from '../../store/slices/tweetSlice';
import EditIcon from '../../icons/EditIcon';

type TweetHeaderProps = Pick<TweetType, 'displayName' | 'userEmail'>;

const TweetHeader: FC<TweetHeaderProps> = ({ displayName, userEmail }) => {
  return (
    <TweetHeaderWrapper>
      <TweetTitle>
        <Username>{displayName}</Username>
        <Nickname>@{userEmail.split('@')[0]} · Apr 1</Nickname>
      </TweetTitle>
      <EditButton>
        <EditIcon />
      </EditButton>
    </TweetHeaderWrapper>
  );
};

export default TweetHeader;
