import React from 'react';
import {
  Amount,
  AvatarRow,
  AvatarWrapper,
  BorderedButton,
  Followers,
  FollowersWrapper,
  Nickname,
  UserBio,
  UserWrapper,
  Username,
} from './styled';
import Avatar from '../Avatar/Avatar';

const ProfileUser = () => {
  return (
    <UserWrapper>
      <AvatarRow>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <BorderedButton>Edit profile</BorderedButton>
      </AvatarRow>
      <Username>Bobur</Username>
      <Nickname>@bobur_mavlonov</Nickname>
      <UserBio>UX&UI designer at @abutechuz</UserBio>
      <FollowersWrapper>
        <Followers>
          <Amount>67</Amount> Following
        </Followers>
        <Followers>
          <Amount>47</Amount> Followers
        </Followers>
      </FollowersWrapper>
    </UserWrapper>
  );
};

export default ProfileUser;
