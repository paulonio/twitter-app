import React, { ChangeEvent, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Label, SearchField, SearchIcon, Wrapper } from './styled';
import { StoreType } from '../../store';
import { TweetType } from '../../store/slices/tweetSlice';
import SidebarResults from '../SidebarResults/SidebarResults';

const SidebarInput = () => {
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.tweets);
  const [filterValue, setFilterValue] = useState<string>('');

  const handleChangeFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  const filterTweets = useMemo(
    () => tweets.filter(({ tweet }) => tweet.includes(filterValue)).slice(0, 3),
    [filterValue]
  );

  return (
    <Wrapper>
      <Label>
        <SearchIcon />
        <SearchField value={filterValue} onChange={handleChangeFilterValue} />
        {filterValue && filterTweets.length > 0 && <SidebarResults data={filterTweets} />}
      </Label>
    </Wrapper>
  );
};

export default SidebarInput;
