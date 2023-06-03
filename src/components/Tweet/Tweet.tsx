import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import TweetHeader from '../TweetHeader/TweetHeader';
import type { TweetType } from '../../store/slices/tweetSlice';
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
import LikeIcon from '../../icons/LikeIcon';

type TweetProps = Omit<TweetType, 'userUid'>;

const Tweet: FC<TweetProps> = ({ tweet, userEmail, displayName, urlToImage }) => {
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
