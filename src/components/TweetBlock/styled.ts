import { styled } from 'styled-components';

export const TweetWrapper = styled.section`
  padding: 15px 11px;
  display: flex;
  justify-content: space-between;
  border-top: solid 1px #d8d8d8;
  border-bottom: solid 1px #d8d8d8;
`;

export const AvatarWrapper = styled.div`
  width: 49px;
  height: 54px;
  margin-left: 17px;
`;

export const TweetContent = styled.div`
  width: 87%;
  max-width: 794px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const TweetInput = styled.input.attrs({ placeholder: "What's happening" })`
  width: 100%;
  font-size: 22px;
  line-height: 29px;
  font-weight: 600;
  color: #828282;
  border: none;
  outline: none;
`;

export const TweetFooter = styled.div`
  width: 100%;
  margin-top: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 13%;
  max-width: 108px;
`;

export const ImageControlsWrapper = styled.div`
  width: 20%;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FileInput = styled.input.attrs({ accept: 'image/*', type: 'file' })`
  display: none;
`;

export const PreviewImage = styled.img`
  width: 70px;
  height: auto;
`;
