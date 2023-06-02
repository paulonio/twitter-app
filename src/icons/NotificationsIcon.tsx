import React, { FC, SVGProps } from 'react';

const NotificationsIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M25.3142 20.0624C25.2909 20.0437 22.8175 18.1491 22.8607 13.0274C22.884 10.0734 21.9134 7.44838 20.1225 5.63655C18.5184 4.01138 16.3461 3.11305 14.0069 3.10138H13.9917C11.6537 3.11305 9.48139 4.01139 7.87606 5.63773C6.08639 7.44956 5.1134 10.0734 5.13906 13.0274C5.18223 18.0791 2.78239 19.9889 2.68673 20.0624C2.38339 20.2876 2.25973 20.6807 2.37756 21.0401C2.49656 21.3994 2.83255 21.6409 3.20821 21.6409H8.94823C9.06723 24.3359 11.278 26.4942 13.9999 26.4942C16.7217 26.4942 18.9302 24.3359 19.0481 21.6409H24.7904C25.1661 21.6409 25.502 21.4006 25.6187 21.0412C25.7389 20.6831 25.6152 20.2887 25.3119 20.0635L25.3142 20.0624ZM14.0011 24.7407C12.2452 24.7407 10.8161 23.3676 10.7017 21.6397H17.3004C17.1837 23.3664 15.7569 24.743 14.0011 24.743V24.7407ZM5.11106 19.8897C5.9744 18.5691 6.91706 16.357 6.88906 13.011C6.86806 10.491 7.64039 8.36539 9.12089 6.86622C10.3961 5.57472 12.1309 4.85955 14.0011 4.85138C15.8712 4.86071 17.6025 5.57473 18.8777 6.86739C20.3594 8.36656 21.1329 10.4911 21.1119 13.0122C21.0839 16.3582 22.0277 18.5714 22.891 19.8909H5.11106V19.8897Z"
        fill="black"
      />
    </svg>
  );
};

export default NotificationsIcon;
