import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@components/Avatar/Avatar';
import { StyledButton } from '@components/Button/styled';

import { StoreType } from '@store/index.ts';
import type { User } from '@store/slices/authSlice';
import { AddTweetRequest, addTweetRequest } from '@store/saga/tweetSaga';

import ImageIcon from '@icons/ImageIcon';

import { parseDate } from '@utils/utils';

import {
  AvatarWrapper,
  ButtonWrapper,
  FileInput,
  ImageControlsWrapper,
  PreviewImage,
  TweetContent,
  TweetFooter,
  TweetInput,
  TweetWrapper,
} from './styled';

interface TweetBlockProps {
  setModal?: (value: boolean) => void;
}

const TweetBlock: FC<TweetBlockProps> = ({ setModal }) => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState<string>('');
  const [image, setImage] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeTweet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTweet(value);
  };

  const handleAddTweet = async () => {
    if (user && tweet) {
      const { uid, displayName, email } = user;
      const date = new Date();
      const dateString = parseDate(date);
      const id = `${date.getTime()}`;
      const userTweet: AddTweetRequest = {
        id,
        date: dateString,
        tweet,
        userEmail: email,
        displayName,
        userUid: uid,
        image,
      };
      if (setModal) {
        setModal(false);
      }
      setImage(undefined);
      setPreviewUrl('');
      setTweet('');
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
      const url = URL.createObjectURL(fileImage);
      setImage(fileImage);
      setPreviewUrl(url);
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
          <ImageControlsWrapper>
            <ImageIcon onClick={handleAddImage} />
            <FileInput ref={inputRef} onChange={handleChangeInput} />
            {previewUrl && <PreviewImage src={previewUrl} alt="Preview" />}
          </ImageControlsWrapper>
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
