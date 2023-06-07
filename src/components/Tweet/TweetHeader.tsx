import React, { FC } from 'react';

import type { TweetType } from '@store/slices/tweetSlice';

import { Nickname, Username } from '@components/Menu/styled';
import { TweetHeaderWrapper, TweetTitle, EditButton, Edit } from './styled';

type TweetHeaderProps = Pick<TweetType, 'displayName' | 'userEmail' | 'date'>;

const TweetHeader: FC<TweetHeaderProps> = ({ displayName, userEmail, date }) => {
  return (
    <TweetHeaderWrapper>
      <TweetTitle>
        <Username data-testid="username">{displayName}</Username>
        <Nickname data-testid="nickname">
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
