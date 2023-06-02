import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import {
  AvatarWrapper,
  ButtonWrapper,
  ImageIcon,
  TweetContent,
  TweetFooter,
  TweetInput,
  TweetWrapper,
} from './styled';
import { StoreType } from '../../store';
import type { User } from '../../store/slices/authSlice';
import { addTweetRequest } from '../../store/saga/tweetSaga';
import { TweetType } from '../../store/slices/tweetSlice';
import { StyledButton } from '../Button/styled';

const TweetBlock = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState<string>('');

  const handleChangeTweet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTweet(value);
  };

  const handleAddTweet = async () => {
    if (user) {
      const { uid, displayName, email } = user;
      const userTweet: TweetType = {
        tweet,
        userEmail: email,
        displayName,
        userUid: uid,
      };
      dispatch(addTweetRequest(userTweet));
    }
  };

  return (
    <TweetWrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <TweetContent>
        <TweetInput value={tweet} onChange={handleChangeTweet} />
        <TweetFooter>
          <ImageIcon />
          <ButtonWrapper>
            <StyledButton $buttonType="primary" onClick={handleAddTweet}>
              Tweet
            </StyledButton>
          </ButtonWrapper>
        </TweetFooter>
      </TweetContent>
    </TweetWrapper>
  );
};

export default TweetBlock;
