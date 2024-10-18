/* eslint-disable max-len */
import React from 'react';

import { SIZE_ENUM } from '../../types';
import { IconProps, ICON_ZOOM } from '../types';

export const CheckOff = ({ color = '#191919', size = SIZE_ENUM.MEDIUM, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    style={{ zoom: ICON_ZOOM[size] }}
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M12.084 3.538a8.462 8.462 0 1 0 0 16.924 8.462 8.462 0 0 0 0-16.924ZM2.084 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Z"
      clipRule="evenodd"
    />
  </svg>
);