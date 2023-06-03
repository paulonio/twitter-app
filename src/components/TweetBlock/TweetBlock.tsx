import React, { ChangeEvent, FC, useRef, useState } from 'react';
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
import { parseDate } from '../../utils/utils';

interface TweetBlockProps {
  setModal?: (value: boolean) => void;
}

const TweetBlock: FC<TweetBlockProps> = ({ setModal }) => {
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
