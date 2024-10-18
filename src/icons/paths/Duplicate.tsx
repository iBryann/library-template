/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Duplicate = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      d="M6.25065 2C5.79041 2 5.41732 2.3731 5.41732 2.83333C5.41732 3.29357 5.79041 3.66667 6.25065 3.66667H20.4173V17.8333C20.4173 18.2936 20.7904 18.6667 21.2507 18.6667C21.7109 18.6667 22.084 18.2936 22.084 17.8333V2.83333C22.084 2.3731 21.7109 2 21.2507 2H6.25065Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.91732 5.33333C2.45708 5.33333 2.08398 5.70643 2.08398 6.16667V21.1667C2.08398 21.6269 2.45708 22 2.91732 22H17.9173C18.3776 22 18.7507 21.6269 18.7507 21.1667V6.16667C18.7507 5.70643 18.3776 5.33333 17.9173 5.33333H2.91732ZM3.75065 20.3333V7H17.084V20.3333H3.75065Z"
      fill={color}
    />
  </>
);
