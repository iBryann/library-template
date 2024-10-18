/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Warning = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      fill={color}
      fillRule="evenodd"
      d="M12 9.432c.395 0 .715.32.715.715v3.573a.715.715 0 1 1-1.43 0v-3.573c0-.395.32-.715.715-.715Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M10.929 3.288a2.135 2.135 0 0 1 2.923.785l.001.002 7.86 13.575a2.144 2.144 0 0 1-1.85 3.216H4.137a2.145 2.145 0 0 1-1.849-3.216l7.86-13.575v-.002c.188-.326.457-.597.782-.785Zm.457 1.5L3.525 18.365a.716.716 0 0 0 .615 1.072h15.72a.715.715 0 0 0 .615-1.072l-7.863-13.58a.706.706 0 0 0-1.225 0l-.001.003Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      d="M12 18.008a1.072 1.072 0 1 0 0-2.144 1.072 1.072 0 0 0 0 2.144Z"
    />
  </>
);
