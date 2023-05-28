import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import TweetHeader from '../TweetHeader/TweetHeader';
import {
  LikeAmount,
  LikeIcon,
  TweetAvatar,
  TweetContent,
  TweetLike,
  TweetText,
  TweetWrapper,
} from './styled';

interface TweetProps {
  text: string;
}

const Tweet: FC<TweetProps> = ({ text }) => {
  return (
    <TweetWrapper>
      <TweetAvatar>
        <Avatar />
      </TweetAvatar>
      <TweetContent>
        <TweetHeader />
        <TweetText>{text}</TweetText>
        <TweetLike>
          <LikeIcon />
          <LikeAmount>8</LikeAmount>
        </TweetLike>
      </TweetContent>
    </TweetWrapper>
  );
};

export default Tweet;
