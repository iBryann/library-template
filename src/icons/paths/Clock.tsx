/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Clock = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      d="M12.8532 6.61538C12.8532 6.19055 12.5088 5.84615 12.084 5.84615C11.6591 5.84615 11.3148 6.19055 11.3148 6.61538V12C11.3148 12.4248 11.6591 12.7692 12.084 12.7692H17.4686C17.8934 12.7692 18.2378 12.4248 18.2378 12C18.2378 11.5752 17.8934 11.2308 17.4686 11.2308H12.8532V6.61538Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.084 2C6.56114 2 2.08398 6.47715 2.08398 12C2.08398 17.5228 6.56114 22 12.084 22C17.6068 22 22.084 17.5228 22.084 12C22.084 6.47715 17.6068 2 12.084 2ZM3.62245 12C3.62245 7.32682 7.41081 3.53846 12.084 3.53846C16.7572 3.53846 20.5455 7.32682 20.5455 12C20.5455 16.6732 16.7572 20.4615 12.084 20.4615C7.41081 20.4615 3.62245 16.6732 3.62245 12Z"
      fill={color}
    />
  </>
);
