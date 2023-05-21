import { styled } from 'styled-components';

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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsersTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 92px;
`;

export const SecondaryButton = styled.button`
  margin-top: 30px;
  max-width: 90px;
  font-size: 18px;
  line-height: 100%;
  font-weight: 400;
  color: #1da1f2;
  background-color: transparent;
  border: none;
  transition: color 0.3s;
  &:hover {
    cursor: pointer;
    color: #4fa9e6;
  }
`;
