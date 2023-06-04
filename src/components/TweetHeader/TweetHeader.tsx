import React, { FC } from 'react';
import { TweetHeaderWrapper, TweetTitle, EditButton, Edit } from './styled';
import { Nickname, Username } from '../MenuUser/styled';
import { TweetType } from '../../store/slices/tweetSlice';

type TweetHeaderProps = Pick<TweetType, 'displayName' | 'userEmail' | 'date'>;

const TweetHeader: FC<TweetHeaderProps> = ({ displayName, userEmail, date }) => {
  return (
    <TweetHeaderWrapper>
      <TweetTitle>
        <Username>{displayName}</Username>
        <Nickname>
          @{userEmail.split('@')[0]} · {date}
        </Nickname>
      </TweetTitle>
      <EditButton>
        <Edit />
      </EditButton>
    </TweetHeaderWrapper>
  );
};

export default TweetHeader;
