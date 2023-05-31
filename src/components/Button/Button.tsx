import React, { FC, HTMLAttributes } from 'react';
import { StyledButton } from './styled';

export type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  children?: string;
  buttonType: ButtonType;
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType }) => {
  return <StyledButton $buttonType={buttonType}>{children}</StyledButton>;
};

export default Button;
