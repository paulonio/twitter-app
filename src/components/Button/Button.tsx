import React, { FC } from 'react';
import { StyledButton } from './styled';

export type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  children?: string;
  buttonType: ButtonType;
}

const Button: FC<ButtonProps> = ({ children, buttonType }, props) => {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
