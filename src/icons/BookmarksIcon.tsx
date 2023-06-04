import React, { FC, SVGProps } from 'react';

const BookmarksIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="28"
      height="25"
      viewBox="0 0 24 25"
      {...props}
    >
      <path d="M19.55 22.9181C19.393 22.9181 19.238 22.8681 19.108 22.7741L11.65 17.3461L4.192 22.7761C3.964 22.9401 3.66199 22.9661 3.40999 22.8361C3.15999 22.7091 3 22.4511 3 22.1691V5.01807C3 3.77807 4.01 2.76807 5.25 2.76807H18.048C19.288 2.76807 20.298 3.77807 20.298 5.01807V22.1681C20.298 22.4501 20.14 22.7081 19.888 22.8361C19.782 22.8911 19.665 22.9181 19.548 22.9181H19.55ZM11.65 15.6681C11.805 15.6681 11.96 15.7161 12.09 15.8121L18.8 20.6951V5.01807C18.8 4.60607 18.463 4.26807 18.05 4.26807H5.25C4.837 4.26807 4.5 4.60607 4.5 5.01807V20.6951L11.21 15.8121C11.34 15.7161 11.495 15.6681 11.65 15.6681Z" />
    </svg>
  );
};

export default BookmarksIcon;
