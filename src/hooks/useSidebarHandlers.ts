import { StoreType } from '@src/store';
import { UserType } from '@src/store/slices/authSlice';
import { TweetType } from '@src/store/slices/tweetSlice';
import { filterUsers, filterTweets } from '@src/utils/utils';
import { ChangeEvent, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export const useSidebarHandlers = () => {
  const users = useSelector<StoreType, UserType[]>((state) => state.auth.allUsers);
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

  return {
    usersFilterValue,
    tweetsFilterValue,
    filteredUsers,
    filteredTweets,
    handleChangeUsersValue,
    handleChangeTweetsValue,
  };
};
