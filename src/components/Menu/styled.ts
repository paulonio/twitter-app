import { styled } from 'styled-components';

export const Wrapper = styled.aside`
  width: 250px;
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  align-items: start;
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
