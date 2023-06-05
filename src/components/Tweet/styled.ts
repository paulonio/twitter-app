import { styled } from 'styled-components';

import EditIcon from '@icons/EditIcon';

export const TweetWrapper = styled.div`
  width: 100%;
  max-width: 910px;
  padding: 10px 35px 21px;
  display: flex;
  border-top: solid 1px ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 470px) {
    padding: 10px 8px 21px;
  }
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
  color: ${({ theme }) => theme.colors.text};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 679px;
  height: auto;
  max-height: 453px;
  margin-top: 15px;
  border-radius: 20px;
  overflow: hidden;
`;

export const TweetImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const TweetLike = styled.div`
  width: max-content;
  margin-top: 22px;
  display: flex;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

export const TweetHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TweetTitle = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const EditButton = styled.button`
  width: 17px;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundBody};
  &:hover {
    cursor: pointer;
  }
`;

export const Edit = styled(EditIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;

export const TweetSingleWrapper = styled.div`
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
