import React from 'react';

import { FollowersWrapper, FollowersItem, Amount } from './styled';

const Followers = () => {
  return (
    <FollowersWrapper>
      <FollowersItem>
        <Amount>67</Amount> Following
      </FollowersItem>
      <FollowersItem>
        <Amount>47</Amount> Followers
      </FollowersItem>
    </FollowersWrapper>
  );
};

export default Followers;
