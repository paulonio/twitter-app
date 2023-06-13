import { styled } from 'styled-components';

import EditIcon from '@icons/EditIcon';

interface Like {
  $isLiked: boolean;
}

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

export const TweetLike = styled.div<Like>`
  width: max-content;
  margin-top: 22px;
  display: flex;
  align-items: center;
  gap: 8px;

  & svg {
    fill: ${({ $isLiked, theme }) => ($isLiked ? '#ef233c' : theme.colors.text)};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const LikeAmount = styled.span<Like>`
  font-size: 19px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme, $isLiked }) => ($isLiked ? '#ef233c' : theme.colors.text)};
  opacity: 0.8;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundBody};
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteConfirmation = styled.div`
  width: 100px;
  position: absolute;
  top: 200%;
  right: 0;
  border-radius: 6px;
  border: none;
  color: red;
  background-color: ${({ theme }) => theme.colors.backgroundInput};

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
