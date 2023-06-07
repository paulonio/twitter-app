import React, { FC } from 'react';

import Avatar from '@components/Avatar/Avatar';
import TweetHeader from '@src/components/Tweet/TweetHeader';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

import type { TweetType } from '@store/slices/tweetSlice';

import LikeIcon from '@icons/LikeIcon';
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
  const { tweet, userEmail, displayName, urlToImage, date } = currentTweet;

  return (
    <ErrorBoundary>
      <TweetWrapper data-testid="tweet-item">
        <TweetAvatar>
          <Avatar />
        </TweetAvatar>
        <TweetContent>
          <TweetHeader userEmail={userEmail} displayName={displayName} date={date} />
          <TweetText data-testid="tweet-text">{tweet}</TweetText>
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
    </ErrorBoundary>
  );
};

export default Tweet;
