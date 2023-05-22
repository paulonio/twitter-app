import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import {
  AvatarWrapper,
  ButtonWrapper,
  ImageIcon,
  TweetContent,
  TweetFooter,
  TweetInput,
  TweetWrapper,
} from './styled';

const TweetBlock = () => {
  return (
    <TweetWrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <TweetContent>
        <TweetInput />
        <TweetFooter>
          <ImageIcon />
          <ButtonWrapper>
            <Button buttonType="primary">Tweet</Button>
          </ButtonWrapper>
        </TweetFooter>
      </TweetContent>
    </TweetWrapper>
  );
};

export default TweetBlock;
