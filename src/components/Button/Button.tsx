import React, { FC, HTMLAttributes } from 'react';

import { StyledButton } from './styled';

export type ButtonType = 'primary' | 'secondary' | 'bordered' | 'link' | 'danger';

type ButtonProps = {
  children?: string;
  $buttonType: ButtonType;
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
