import React, { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TweetType } from '../../store/slices/tweetSlice';
import { User } from '../../store/slices/authSlice';
import { SearchResult, SearchResults } from './styled';
import { isUserArray } from '../../utils/utils';
import MenuUser from '../MenuUser/MenuUser';

interface ResultsProps {
  data: TweetType[] | User[];
}

const SidebarResults: FC<ResultsProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigateToTweetPage = (e: MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/feed/${id}`);
  };

  if (isUserArray(data)) {
    return (
      <SearchResults>
        {data.length > 0 && data.map((user) => <MenuUser key={user.uid} user={user} />)}
      </SearchResults>
    );
  }

  return (
    <SearchResults>
      {data.map(({ tweet, id }) => (
        <SearchResult key={id} onClick={handleNavigateToTweetPage} data-id={id}>
          {tweet}
        </SearchResult>
      ))}
    </SearchResults>
  );
};

export default SidebarResults;
