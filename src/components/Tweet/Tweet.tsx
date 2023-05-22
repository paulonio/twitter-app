import React from 'react';
import Avatar from '../Avatar/Avatar';
import TweetHeader from '../TweetHeader/TweetHeader';
import {
  LikeAmount,
  LikeIcon,
  TweetAvatar,
  TweetContent,
  TweetLike,
  TweetText,
  TweetWrapper,
} from './styled';

const Tweet = () => {
  return (
    <TweetWrapper>
      <TweetAvatar>
        <Avatar />
      </TweetAvatar>
      <TweetContent>
        <TweetHeader />
        <TweetText>
          {`4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan
          to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim`}
        </TweetText>
        <TweetLike>
          <LikeIcon />
          <LikeAmount>8</LikeAmount>
        </TweetLike>
      </TweetContent>
    </TweetWrapper>
  );
};

export default Tweet;
