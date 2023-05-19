import { styled } from 'styled-components';

export const Wrapper = styled.aside`
  width: 155px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Logo = styled.img.attrs({
  src: '/assets/icons/twitter-logo.svg',
  alt: 'Twitter logo',
})`
  width: 40px;
  height: 33px;
  margin-bottom: 49px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 230px;
  padding: 15px 90px;
  color: #ffffff;
  background-color: #1d9bf0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  border-radius: 27.5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1da1f2;
    cursor: pointer;
  }
`;
