import styled from 'styled-components';

import EditIcon from '@icons/EditIcon';

export const TweetHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TweetTitle = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const EditButton = styled.button`
  width: 17px;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundBody};
  &:hover {
    cursor: pointer;
  }
`;

export const Edit = styled(EditIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
