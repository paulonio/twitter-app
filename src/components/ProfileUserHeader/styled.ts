import { styled } from 'styled-components';

export const AvatarRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  height: 150px;
  width: 150px;

  @media screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export const ButtonWrapper = styled.div`
  transform: translateY(50%);
`;
