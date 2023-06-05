import { styled } from 'styled-components';

export const EditForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ControlsWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
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
