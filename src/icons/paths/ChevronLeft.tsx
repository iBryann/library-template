/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const ChevronLeft = ({ color = '#191919' }: PathProps) => (
  <path
    fill={color}
    fillRule="evenodd"
    d="M15.366 5.186a.636.636 0 0 1 0 .9L9.452 12l5.914 5.914a.636.636 0 1 1-.9.9L8.102 12.45a.636.636 0 0 1 0-.9l6.364-6.364a.636.636 0 0 1 .9 0Z"
    clipRule="evenodd"
  />
);
