import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import SidebarInput from '@components/SidebarInput/SidebarInput';
import SidebarPosts from '@components/SidebarPosts/SidebarPosts';
import SidebarUsers from '@components/SidebarUsers/SidebarUsers';

import type { StoreType } from '@store/index.ts';
import type { User } from '@store/slices/authSlice';
import type { TweetType } from '@store/slices/tweetSlice';

import { filterTweets, filterUsers } from '@utils/utils';

import { FixedWrapper, Wrapper } from './styled';

interface SidebarProps {
  type: 'profile' | 'feed';
}

const Sidebar: FC<SidebarProps> = ({ type }) => {
  const users = useSelector<StoreType, User[]>((state) => state.auth.allUsers);
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.tweets);
  const [usersFilterValue, setUsersFilterValue] = useState<string>('');
  const [tweetsFilterValue, setTweetsFilterValue] = useState<string>('');

  const handleChangeUsersValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsersFilterValue(value);
  };

  const handleChangeTweetsValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTweetsFilterValue(value);
  };

  const filteredUsers = useMemo(() => filterUsers(users, usersFilterValue), [usersFilterValue]);
  const filteredTweets = useMemo(
    () => filterTweets(tweets, tweetsFilterValue),
    [tweetsFilterValue]
  );

  return (
    <Wrapper>
      <FixedWrapper>
        {type === 'profile' ? (
          <SidebarInput
            value={usersFilterValue}
            onChange={handleChangeUsersValue}
            data={filteredUsers}
          />
        ) : (
          <SidebarInput
            value={tweetsFilterValue}
            onChange={handleChangeTweetsValue}
            data={filteredTweets}
          />
        )}
        <SidebarPosts />
        <SidebarUsers />
      </FixedWrapper>
    </Wrapper>
  );
};

export default Sidebar;
