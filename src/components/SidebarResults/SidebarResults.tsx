import React, { FC } from 'react';
import { TweetType } from '../../store/slices/tweetSlice';
import { User } from '../../store/slices/authSlice';
import { SearchResult, SearchResults } from './styled';
import { isUserArray } from '../../utils/utils';

interface ResultsProps {
  data: TweetType[] | User[];
}

const SidebarResults: FC<ResultsProps> = ({ data }) => {
  if (isUserArray(data)) {
    return (
      <SearchResults>
        {data.map(({ displayName, uid }) => (
          <SearchResult key={uid}>{displayName}</SearchResult>
        ))}
      </SearchResults>
    );
  }

  return (
    <SearchResults>
      {data.map(({ tweet }, id) => (
        <SearchResult key={id}>{tweet}</SearchResult>
      ))}
    </SearchResults>
  );
};

export default SidebarResults;
