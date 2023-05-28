import React from 'react';
import { useSelector } from 'react-redux';
import type { User } from '../../store/slices/authSlice';
import { TweetHeaderWrapper, TweetTitle, EditButton, EditIcon } from './styled';
import { Nickname, Username } from '../MenuUser/styled';
import { StoreType } from '../../store';

const TweetHeader = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);

  return (
    <TweetHeaderWrapper>
      <TweetTitle>
        <Username>{user?.displayName || 'Bobur'}</Username>
        <Nickname>@{user?.email?.split('@')[0] || '@bobur'} · Apr 1</Nickname>
      </TweetTitle>
      <EditButton>
        <EditIcon />
      </EditButton>
    </TweetHeaderWrapper>
  );
};

export default TweetHeader;
