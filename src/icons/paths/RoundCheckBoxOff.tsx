/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const RoundCheckBoxOff = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.084 3.53846C7.41081 3.53846 3.62245 7.32682 3.62245 12C3.62245 16.6732 7.41081 20.4615 12.084 20.4615C16.7572 20.4615 20.5455 16.6732 20.5455 12C20.5455 7.32682 16.7572 3.53846 12.084 3.53846ZM2.08398 12C2.08398 6.47715 6.56114 2 12.084 2C17.6068 2 22.084 6.47715 22.084 12C22.084 17.5228 17.6068 22 12.084 22C6.56114 22 2.08398 17.5228 2.08398 12Z"
      fill={color}
    />
  </>
);
