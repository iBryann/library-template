/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const ChevronRight = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9.18639 5.18639C9.4349 4.93787 9.83783 4.93787 10.0863 5.18639L16.45 11.55C16.6985 11.7985 16.6985 12.2015 16.45 12.45L10.0863 18.8136C9.83783 19.0621 9.4349 19.0621 9.18639 18.8136C8.93787 18.5651 8.93787 18.1622 9.18639 17.9137L15.1 12L9.18639 6.08634C8.93787 5.83783 8.93787 5.4349 9.18639 5.18639Z"
    fill={color}
  />
);
