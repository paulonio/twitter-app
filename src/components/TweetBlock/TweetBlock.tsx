import React, { ChangeEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import {
  AvatarWrapper,
  ButtonWrapper,
  FileInput,
  TweetContent,
  TweetFooter,
  TweetInput,
  TweetWrapper,
} from './styled';
import { StoreType } from '../../store';
import type { User } from '../../store/slices/authSlice';
import { AddTweetRequest, addTweetRequest } from '../../store/saga/tweetSaga';
import { StyledButton } from '../Button/styled';
import ImageIcon from '../../icons/ImageIcon';

const TweetBlock = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState<string>('');
  const [image, setImage] = useState<File | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeTweet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTweet(value);
  };

  const handleAddTweet = async () => {
    if (user) {
      const { uid, displayName, email } = user;
      const userTweet: AddTweetRequest = {
        tweet,
        userEmail: email,
        displayName,
        userUid: uid,
        image,
      };
      dispatch(addTweetRequest(userTweet));
    }
  };

  const handleAddImage = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileImage = e.target.files[0];
      setImage(fileImage);
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
          <ImageIcon onClick={handleAddImage} />
          <FileInput ref={inputRef} onChange={handleChangeInput} />
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
