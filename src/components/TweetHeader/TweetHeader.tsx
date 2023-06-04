import React, { FC } from 'react';

import { Nickname, Username } from '@components/MenuUser/styled';

import { TweetType } from '@store/slices/tweetSlice';

import { TweetHeaderWrapper, TweetTitle, EditButton, Edit } from './styled';

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
