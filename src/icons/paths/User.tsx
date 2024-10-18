/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const User = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.86004 15.0434C6.96968 13.9115 5.70421 11.8435 5.70421 9.47992C5.70421 5.90116 8.60537 3 12.1841 3C15.7629 3 18.6641 5.90116 18.6641 9.47992C18.6641 11.8435 17.3986 13.9116 15.5082 15.0434C16.2278 15.2763 16.924 15.585 17.5844 15.9663C19.2263 16.9144 20.5897 18.2779 21.5375 19.92C21.7363 20.2643 21.6183 20.7047 21.2739 20.9035C20.9295 21.1022 20.4892 20.9842 20.2904 20.6398C19.469 19.2167 18.2874 18.035 16.8644 17.2133C15.4627 16.404 13.8756 15.9722 12.2579 15.9594C12.2334 15.9597 12.2088 15.9598 12.1841 15.9598C12.1595 15.9598 12.1349 15.9597 12.1103 15.9594C10.4926 15.9722 8.90542 16.404 7.50376 17.2133C6.08079 18.035 4.89919 19.2167 4.07775 20.6398C3.87896 20.9842 3.43863 21.1022 3.09424 20.9035C2.74986 20.7047 2.63183 20.2643 2.83062 19.92C3.77844 18.2779 5.14182 16.9144 6.78371 15.9663C7.44418 15.5849 8.14035 15.2762 8.86004 15.0434ZM7.14419 9.47992C7.14419 6.69644 9.40065 4.43998 12.1841 4.43998C14.9676 4.43998 17.2241 6.69644 17.2241 9.47992C17.2241 12.24 15.0053 14.4819 12.2541 14.5194C12.2308 14.5192 12.2074 14.5192 12.1841 14.5192C12.1607 14.5192 12.1374 14.5192 12.1141 14.5194C9.3629 14.4819 7.14419 12.24 7.14419 9.47992Z"
    fill={color}
  />
);
