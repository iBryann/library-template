/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const ChevronUp = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.55 9.18639C11.7985 8.93787 12.2015 8.93787 12.45 9.18639L18.8136 15.55C19.0621 15.7985 19.0621 16.2015 18.8136 16.45C18.5651 16.6985 18.1622 16.6985 17.9137 16.45L12 10.5363L6.08634 16.45C5.83783 16.6985 5.4349 16.6985 5.18639 16.45C4.93787 16.2015 4.93787 15.7985 5.18639 15.55L11.55 9.18639Z"
    fill={color}
  />
);
