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
`;

export const BorderedButton = styled.button`
  transform: translateY(50%);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  background-color: #ffffff;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  transition: background-color 0.3s;
  &:hover {
    background-color: bisque;
    cursor: pointer;
  }
`;
