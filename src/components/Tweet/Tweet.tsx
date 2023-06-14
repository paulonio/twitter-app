import React, { FC } from 'react';

import Avatar from '@components/Avatar/Avatar';
import TweetHeader from '@src/components/Tweet/TweetHeader';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

import type { TweetType } from '@store/slices/tweetSlice';

import LikeIcon from '@icons/LikeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addLikeRequest } from '@src/store/actions/actions';
import { StoreType } from '@src/store';
import { UserType } from '@src/store/slices/authSlice';
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
  const { uid } = useSelector<StoreType, UserType>((state) => state.auth.user!);
  const dispatch = useDispatch();
  const { tweet, userEmail, displayName, urlToImage, date, id, likes } = currentTweet;
  const isLiked = likes.includes(uid);

  const handleClickLike = () => {
    dispatch(addLikeRequest({ uid, tweetId: id }));
  };

  return (
    <ErrorBoundary>
      <TweetWrapper data-testid="tweet-item">
        <TweetAvatar>
          <Avatar />
        </TweetAvatar>
        <TweetContent>
          <TweetHeader userEmail={userEmail} displayName={displayName} date={date} id={id} />
          <TweetText data-testid="tweet-text">{tweet}</TweetText>
          {urlToImage && (
            <ImageWrapper>
              <TweetImage src={urlToImage} alt="Tweet" />
            </ImageWrapper>
          )}
          <TweetLike $isLiked={isLiked} onClick={handleClickLike}>
            <LikeIcon />
            <LikeAmount $isLiked={isLiked}>{likes.length}</LikeAmount>
          </TweetLike>
        </TweetContent>
      </TweetWrapper>
    </ErrorBoundary>
  );
};

export default Tweet;
