import { styled } from 'styled-components';

export const ProfileWrapper = styled.section`
  width: 57.5%;
  max-width: 910px;
  border-left: solid 1px #d8d8d8;
  border-right: solid 1px #d8d8d8;
`;

export const HeaderUsername = styled.div`
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
`;

export const HeaderTweets = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  opacity: 0.6;
`;

export const ProfileImage = styled.img.attrs({
  src: '/assets/images/Profile-image.jpg',
  alt: 'Profile image',
})`
  width: 100%;
  height: auto;
  margin-top: 85px;
`;
