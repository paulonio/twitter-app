import React, { ChangeEvent, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Label, SearchField, SearchIcon, SearchResult, SearchResults, Wrapper } from './styled';
import { StoreType } from '../../store';
import { TweetType } from '../../store/slices/tweetSlice';

const SidebarInput = () => {
  const tweets = useSelector<StoreType, TweetType[]>((state) => state.tweet.tweets);
  const [filterValue, setFilterValue] = useState('');

  const handleChangeFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  const filterTweets = useMemo(
    () => tweets.filter((data) => data.tweet.includes(filterValue)).slice(0, 3),
    [filterValue]
  );

  return (
    <Wrapper>
      <Label>
        <SearchIcon />
        <SearchField value={filterValue} onChange={handleChangeFilterValue} />
        {filterValue && filterTweets.length > 0 && (
          <SearchResults>
            {filterTweets.map((data) => (
              <SearchResult>{data.tweet}</SearchResult>
            ))}
          </SearchResults>
        )}
      </Label>
    </Wrapper>
  );
};

export default SidebarInput;
