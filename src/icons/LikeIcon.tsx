import React, { FC, SVGProps } from 'react';

const LikeIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        d="M12.8 21.914H12.786C10.203 21.866 2.75 15.132 2.75 8.754C2.75 5.69 5.275 3 8.153 3C10.443 3 11.983 4.58 12.799 5.73C13.613 4.582 15.153 3 17.444 3C20.324 3 22.848 5.69 22.848 8.755C22.848 15.131 15.394 21.865 12.811 21.912H12.8V21.914ZM8.154 4.501C6.074 4.501 4.251 6.489 4.251 8.756C4.251 14.496 11.285 20.352 12.801 20.414C14.319 20.352 21.351 14.497 21.351 8.756C21.351 6.489 19.528 4.501 17.448 4.501C14.92 4.501 13.508 7.437 13.496 7.466C13.266 8.028 12.34 8.028 12.109 7.466C12.095 7.436 10.684 4.501 8.15501 4.501H8.154Z"
        fill="#536471"
      />
    </svg>
  );
};

export default LikeIcon;
