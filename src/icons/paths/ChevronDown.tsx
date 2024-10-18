/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const ChevronDown = ({ color = '#191919' }: PathProps) => (
  <path
    fill={color}
    fillRule="evenodd"
    d="M6.102 9.186a.636.636 0 0 1 .9 0l5.914 5.914 5.914-5.914a.636.636 0 1 1 .9.9l-6.364 6.364a.636.636 0 0 1-.9 0l-6.364-6.364a.636.636 0 0 1 0-.9Z"
    clipRule="evenodd"
  />
);
