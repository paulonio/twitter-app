import styled from 'styled-components';

export const TweetHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TweetTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const EditButton = styled.button`
  width: 17px;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

export const EditIcon = styled.img.attrs({ src: '/assets/icons/Edit.svg', alt: 'Edit icon' })``;
