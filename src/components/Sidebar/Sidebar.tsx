import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { FixedWrapper, Wrapper } from './styled';
import SidebarInput from '../SidebarInput/SidebarInput';
import SidebarPosts from '../SidebarPosts/SidebarPosts';
import SidebarUsers from '../SidebarUsers/SidebarUsers';
import { StoreType } from '../../store';
import type { User } from '../../store/slices/authSlice';
import type { TweetType } from '../../store/slices/tweetSlice';
import { filterTweets, filterUsers } from '../../utils/utils';

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
