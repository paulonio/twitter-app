import React, { FC, useState } from 'react';

import type { TweetType } from '@store/slices/tweetSlice';

import { Nickname, Username } from '@components/Menu/styled';
import { useDispatch } from 'react-redux';
import { deleteTweetRequest } from '@src/store/actions/actions';
import { TweetHeaderWrapper, TweetTitle, EditButton, Edit, DeleteConfirmation } from './styled';

type TweetHeaderProps = Pick<TweetType, 'displayName' | 'userEmail' | 'date' | 'id'>;

const TweetHeader: FC<TweetHeaderProps> = ({ displayName, userEmail, date, id }) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleConfirmation = () => {
    if (confirmation) {
      setConfirmation(false);
    } else {
      setConfirmation(true);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTweetRequest({ tweetId: id }));
  };

  return (
    <TweetHeaderWrapper>
      <TweetTitle>
        <Username data-testid="username">{displayName}</Username>
        <Nickname data-testid="nickname">
          @{userEmail.split('@')[0]} · {date}
        </Nickname>
      </TweetTitle>
      <EditButton onClick={toggleConfirmation}>
        <Edit />
        {confirmation && <DeleteConfirmation onClick={handleDelete}>Delete</DeleteConfirmation>}
      </EditButton>
    </TweetHeaderWrapper>
  );
};

export default TweetHeader;
