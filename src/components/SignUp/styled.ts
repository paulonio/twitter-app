import { styled } from 'styled-components';

export const SignUpWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  margin-top: 106px;
  margin-bottom: 35px;
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
`;

export const Form = styled.form`
  width: 40%;
  max-width: 750px;
  padding: 30px 40px 40px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 23px 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

export const Error = styled.p`
  height: 21px;
  padding-left: 8px;
  font-size: 16px;
  line-height: 21px;
  color: red;
`;
