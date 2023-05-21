import React, { FC } from 'react';
import { StyledButton } from './styled';

export type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  children?: string;
  buttonType: ButtonType;
}

const Button: FC<ButtonProps> = ({ children, buttonType }) => {
  return <StyledButton buttonType={buttonType}>{children}</StyledButton>;
};

export default Button;
