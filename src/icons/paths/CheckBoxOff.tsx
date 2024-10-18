/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const CheckBoxOff = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5.33333C4 4.59695 4.59695 4 5.33333 4H18.6667C19.403 4 20 4.59695 20 5.33333V18.6667C20 19.403 19.403 20 18.6667 20H5.33333C4.59695 20 4 19.403 4 18.6667V5.33333ZM18.6667 5.33333H5.33333V18.6667H18.6667V5.33333Z"
      fill={color}
    />
  </>
);
