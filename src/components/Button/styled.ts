import { css, styled } from 'styled-components';
import type { ButtonType } from './Button';

interface StyledButtonProps {
  $buttonType: ButtonType;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  line-height: 100%;
  font-weight: 700;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
  }
  ${(props) => {
    switch (props.$buttonType) {
      case 'primary':
        return css`
          padding: 15px 0;
          background-color: #1d9bf0;
          color: #ffffff;
          &:hover {
            background-color: #4fa9e6;
          }
        `;
      case 'secondary':
        return css`
          padding: 10px 0;
          background-color: #000000;
          color: #ffffff;
          &:hover {
            background-color: #2f2f2f;
          }
        `;
      default:
        return css``;
    }
  }}
`;
