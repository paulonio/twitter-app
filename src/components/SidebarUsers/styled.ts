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
