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
          background-color: ${({ theme }) => theme.colors.backgroundSecondaryButton};
          color: ${({ theme }) => theme.colors.textSecondaryButton};
          &:hover {
            background-color: ${({ theme }) => theme.colors.backgroundSecondaryButtonHover};
          }
        `;
      case 'bordered':
        return css`
          padding: 10px 15px;
          color: ${({ theme }) => theme.colors.text};
          background-color: ${({ theme }) => theme.colors.backgroundBody};
          border: solid 1px ${({ theme }) => theme.colors.borderButton};
          line-height: 24px;
          &:hover {
            background-color: ${({ theme }) => theme.colors.backgroundborderedButtonHover};
            cursor: pointer;
          }
        `;
      case 'link':
        return css`
          width: max-content;
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
      case 'danger':
        return css`
          padding: 10px 15px;
          color: red;
          background-color: transparent;
          border: solid 1px red;
          border-radius: 8px;
          line-height: 24px;
          transition: 0.3s;
          &:hover {
            color: orange;
            border: solid 1px orange;
            cursor: pointer;
          }
        `;
      default:
        return css``;
    }
  }}
`;
