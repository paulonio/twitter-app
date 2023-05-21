import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const Image = styled.img.attrs({ src: '/assets/icons/Avatar.svg', alt: 'Avatar' })``;

export const UserInfo = styled.div``;

export const Username = styled.h4`
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
`;

export const Nickname = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  opacity: 0.6;
`;
