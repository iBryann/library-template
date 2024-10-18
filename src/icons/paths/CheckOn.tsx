/* eslint-disable max-len */
import React from 'react';

import { SIZE_ENUM } from '../../types';
import { IconProps, ICON_ZOOM } from '../types';

export const CheckOn = ({ color = '#191919', size = SIZE_ENUM.MEDIUM, ...props }: IconProps) => (
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
      d="M12 2a10 10 0 1 0 10 10A10.02 10.02 0 0 0 12 2Zm4.76 8.25-5.635 5.385a.78.78 0 0 1-.539.211.74.74 0 0 1-.528-.211L7.24 12.942a.77.77 0 1 1 1.058-1.115l2.288 2.183 5.116-4.875a.77.77 0 0 1 1.058 1.115Z"
    />
  </svg>
);