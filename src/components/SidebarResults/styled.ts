import styled from 'styled-components';

export const SearchResults = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  padding: 10px;
  background-color: #eff3f4;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchResult = styled.p`
  color: #5c6c79;
`;
