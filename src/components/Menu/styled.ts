import { styled } from 'styled-components';

export const Wrapper = styled.aside`
  width: 250px;
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 1480px) {
    width: 220px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 76px;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 76px;
`;

export const Logo = styled.img.attrs({
  src: '/assets/icons/twitter-logo.svg',
  alt: 'Twitter logo',
})`
  width: 40px;
  height: 33px;
  margin-bottom: 49px;
`;

export const UserWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const Image = styled.img.attrs({ src: '/assets/icons/Avatar.svg', alt: 'Avatar' })``;

export const UserInfo = styled.div`
  margin-left: 8px;
`;

export const Username = styled.h4`
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Nickname = styled.div`
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;
