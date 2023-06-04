import React, { FC, SVGProps } from 'react';

const EditIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="18"
      height="4"
      viewBox="0 0 18 4"
      {...props}
    >
      <path d="M4.67308 2C4.67308 3.10457 3.79487 4 2.71154 4C1.62821 4 0.75 3.10457 0.75 2C0.75 0.895431 1.62821 0 2.71154 0C3.79487 0 4.67308 0.895431 4.67308 2Z" />
      <path d="M11.2115 2C11.2115 3.10457 10.3333 4 9.25 4C8.16667 4 7.28846 3.10457 7.28846 2C7.28846 0.895431 8.16667 0 9.25 0C10.3333 0 11.2115 0.895431 11.2115 2Z" />
      <path d="M17.75 2C17.75 3.10457 16.8718 4 15.7885 4C14.7051 4 13.8269 3.10457 13.8269 2C13.8269 0.895431 14.7051 0 15.7885 0C16.8718 0 17.75 0.895431 17.75 2Z" />
    </svg>
  );
};

export default EditIcon;
