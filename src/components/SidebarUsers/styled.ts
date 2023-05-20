import { styled } from 'styled-components';

export const UsersWrapper = styled.div`
  width: 373px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsersTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;

export const UsersButton = styled.button`
  width: 92px;
  height: 38px;
  background-color: black;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  line-height: 100%;
  font-weight: 700;
`;

export const SecondaryButton = styled.button`
  max-width: 90px;
  font-size: 18px;
  line-height: 100%;
  font-weight: 400;
  color: #1da1f2;
  background-color: transparent;
  border: none;
`;
