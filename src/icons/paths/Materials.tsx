/* eslint-disable max-len */
import React from 'react';

import { PathProps } from '../types';

export const Materials = ({ color = '#191919' }: PathProps) => (
  <path
    fill={color}
    d="M7.004 5.763a.75.75 0 0 0-1.424 0l-3.75 11.25a.75.75 0 0 0 .712.987h7.5a.751.751 0 0 0 .712-.987l-3.75-11.25ZM3.583 16.5l2.709-8.128 2.71 8.128h-5.42Zm16.209-9.375a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0Zm-8.25 0a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Zm9.75 6.375h-8.25a.75.75 0 0 0-.75.75v5.25a.75.75 0 0 0 .75.75h8.25a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75Zm-.75 5.25h-6.75V15h6.75v3.75Z"
  />
);
