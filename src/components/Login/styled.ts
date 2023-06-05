import { styled } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const LoginWrapper = styled.div`
  width: 33%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media screen and (max-width: 1480px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 75%;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
    height: 100vh;
    padding: 0 8px;
    justify-content: center;
  }
`;
