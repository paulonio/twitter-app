import { styled } from 'styled-components';

export const TweetWrapper = styled.div`
  width: 100%;
  max-width: 910px;
  padding: 10px 35px 21px;
  display: flex;
  border-top: solid 1px #d8d8d8;
`;

export const TweetAvatar = styled.div`
  width: 49px;
  height: 54px;
`;

export const TweetContent = styled.div`
  width: 93%;
  max-width: 747px;
  margin-left: 8px;
`;

export const TweetText = styled.p`
  margin-top: 5px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

export const TweetLike = styled.div`
  width: 6%;
  max-width: 53px;
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeIcon = styled.img.attrs({ src: '/assets/icons/Like.svg', alt: 'Like icon' })`
  width: 24px;
  height: 24px;
`;

export const LikeAmount = styled.span`
  margin-left: 10px;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;
