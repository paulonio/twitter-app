import { styled } from 'styled-components';

export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  width: 30%;

  @media screen and (max-width: 768px) {
    padding: 0px 10px;
    width: 60%;
  }

  @media screen and (max-width: 470px) {
    padding: 0px 10px;
    width: 100%;
  }
`;
