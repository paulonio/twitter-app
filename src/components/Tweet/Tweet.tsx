import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import TweetHeader from '../TweetHeader/TweetHeader';
import type { TweetType } from '../../store/slices/tweetSlice';
import LikeIcon from '../../icons/LikeIcon';
import {
  ImageWrapper,
  LikeAmount,
  TweetAvatar,
  TweetContent,
  TweetImage,
  TweetLike,
  TweetText,
  TweetWrapper,
} from './styled';

interface TweetProps {
  currentTweet: TweetType;
}

const Tweet: FC<TweetProps> = ({ currentTweet }) => {
  const { tweet, userEmail, displayName, urlToImage } = currentTweet;
  return (
    <TweetWrapper>
      <TweetAvatar>
        <Avatar />
      </TweetAvatar>
      <TweetContent>
        <TweetHeader userEmail={userEmail} displayName={displayName} />
        <TweetText>{tweet}</TweetText>
        {urlToImage && (
          <ImageWrapper>
            <TweetImage src={urlToImage} alt="Tweet" />
          </ImageWrapper>
        )}
        <TweetLike>
          <LikeIcon />
          <LikeAmount>8</LikeAmount>
        </TweetLike>
      </TweetContent>
    </TweetWrapper>
  );
};

export default Tweet;
