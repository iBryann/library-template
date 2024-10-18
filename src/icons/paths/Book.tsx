/* eslint-disable max-len */
import React from 'react';

import { PathProps } from '../types';

export const Book = ({ color = '#191919' }: PathProps) => (
  <path
    fill={color}
    fillRule="evenodd"
    d="M16.795 1.667H5.899a2.566 2.566 0 0 0-2.566 2.565v13.46c0 .354.287.641.641.641h11.539a.641.641 0 0 0 0-1.282H4.615v-.014a1.273 1.273 0 0 1 1.28-1.268h10.9a.641.641 0 0 0 .64-.64V2.307a.641.641 0 0 0-.64-.641ZM5.256 14.487c-.283 0-.544.285-.64.34V4.228a1.274 1.274 0 0 1 1.279-1.28h10.259v11.54H5.256Z"
    clipRule="evenodd"
  />
);
