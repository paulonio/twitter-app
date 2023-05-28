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
import { Tweet, User, addTweet } from '../../store/slices/authSlice';

const TweetBlock = () => {
  const user = useSelector<StoreType, User | null>((state) => state.auth.user);
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState<string>('');

  const handleChangeTweet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTweet(value);
  };

  const handleAddTweet = () => {
    if (user) {
      const { uid } = user;
      const userTweet: Tweet = {
        userUid: uid,
        text: tweet,
      };
      dispatch(addTweet(userTweet));
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
            <button type="button" onClick={handleAddTweet}>
              Tweet
            </button>
          </ButtonWrapper>
        </TweetFooter>
      </TweetContent>
    </TweetWrapper>
  );
};

export default TweetBlock;
