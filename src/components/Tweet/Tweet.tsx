import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import TweetHeader from '../TweetHeader/TweetHeader';
import type { TweetType } from '../../store/slices/tweetSlice';
import {
  LikeAmount,
  LikeIcon,
  TweetAvatar,
  TweetContent,
  TweetLike,
  TweetText,
  TweetWrapper,
} from './styled';

type TweetProps = Omit<TweetType, 'userUid'>;

const Tweet: FC<TweetProps> = ({ tweet, userEmail, displayName }) => {
  return (
    <TweetWrapper>
      <TweetAvatar>
        <Avatar />
      </TweetAvatar>
      <TweetContent>
        <TweetHeader userEmail={userEmail} displayName={displayName} />
        <TweetText>{tweet}</TweetText>
        <TweetLike>
          <LikeIcon />
          <LikeAmount>8</LikeAmount>
        </TweetLike>
      </TweetContent>
    </TweetWrapper>
  );
};

export default Tweet;
