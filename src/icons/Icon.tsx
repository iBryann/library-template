import React from 'react';

import { SIZE_ENUM } from '../types';
import { IconProps, ICON_ZOOM, ICONS } from './types';

export const Icon = ({
  color = '#191919',
  size = SIZE_ENUM.MEDIUM,
  name,
  style,
  ...props
}: IconProps) => {
  const IconChild = ICONS[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      style={{ zoom: ICON_ZOOM[size], ...style }}
      {...props}
    >
      <IconChild color={color} />
    </svg>
  );
};
