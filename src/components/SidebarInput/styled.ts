import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 373px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  border-radius: 50px;
`;

export const SearchIcon = styled.img.attrs({
  src: '/assets/icons/Search.svg',
  alt: 'Search icon',
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

export const SearchField = styled.input.attrs({ placeholder: 'Search Twitter' })`
  width: 100%;
  color: #5c6c79;
  background-color: #eff3f4;
  padding: 15px 0;
  padding-left: 64px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  border: none;
  border-radius: 50px;
`;
