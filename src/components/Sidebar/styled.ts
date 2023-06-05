import { styled } from 'styled-components';

export const FixedWrapper = styled.div`
  width: inherit;
  position: fixed;
  z-index: 10;
`;

export const Wrapper = styled.aside`
  width: 373px;
  margin-top: 20px;

  @media screen and (max-width: 1480px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
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

export const PostsWrapper = styled.div`
  width: 373px;
  margin-top: 31px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
`;

export const Post = styled.div`
  width: 33%;
  height: 88px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const SearchResults = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchResult = styled.p`
  color: #5c6c79;
`;

export const UsersWrapper = styled.div`
  width: 373px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const UserRow = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsersTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 92px;
`;
