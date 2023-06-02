import React, { FC, SVGProps } from 'react';

const ProfileIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      {...props}
    >
      <path
        d="M13.9701 14.9559C12.3881 14.9559 10.6194 14.7809 9.49011 13.4905C8.54044 12.4055 8.23361 10.7279 8.55095 8.36655C8.99428 5.06955 11.0196 3.10138 13.9713 3.10138C16.9229 3.10138 18.9494 5.06955 19.3916 8.36655C19.7089 10.7279 19.4009 12.4032 18.4513 13.4905C17.3196 14.7809 15.5521 14.9547 13.9713 14.9547L13.9701 14.9559ZM20.7939 26.4475H7.14628C6.37278 26.4475 5.68795 26.1209 5.22128 25.5305C4.72895 24.9075 4.54928 24.0489 4.74295 23.2346C5.71595 19.1162 9.50994 16.238 13.9689 16.238C18.4279 16.238 22.2219 19.115 23.1973 23.2346C23.3886 24.0489 23.2089 24.9075 22.7166 25.5294C22.2499 26.1185 21.5674 26.4452 20.7939 26.4452V26.4475Z"
        fill="black"
      />
    </svg>
  );
};

export default ProfileIcon;
