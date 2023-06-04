import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 373px;
  position: relative;
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
  color: ${({ theme }) => theme.colors.textInput};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  padding: 15px 0;
  padding-left: 64px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  border: none;
  border-radius: 50px;
`;

export const SearchResults = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  padding: 10px;
  background-color: #eff3f4;
  border-radius: 8px;
`;

export const SearchResult = styled.p`
  color: #5c6c79;
`;
