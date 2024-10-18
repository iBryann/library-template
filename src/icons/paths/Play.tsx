/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Play = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6.57856 3.75036C6.31516 3.74454 6.05497 3.80909 5.82484 3.93736C5.59471 4.06563 5.40296 4.25297 5.26938 4.48007C5.13581 4.70716 5.06523 4.96605 5.06494 5.22952V18.7708C5.06523 19.0342 5.13581 19.2928 5.26938 19.5199C5.40296 19.747 5.59471 19.9344 5.82484 20.0626C6.05497 20.1909 6.31516 20.2555 6.57856 20.2496C6.84131 20.2438 7.09796 20.1681 7.3218 20.0304L7.32318 20.0296L18.3851 13.2648L18.3863 13.2641C18.6036 13.134 18.7838 12.95 18.9094 12.7299C19.0362 12.5076 19.1029 12.256 19.1029 12C19.1029 11.744 19.0362 11.4924 18.9094 11.2701C18.7838 11.05 18.6037 10.866 18.3863 10.7359L18.3851 10.7352L7.32315 3.97042L7.32185 3.96962C7.09795 3.83186 6.8414 3.75618 6.57856 3.75036ZM17.1357 12L6.79581 18.3232L6.79581 5.67681L17.1357 12Z"
    fill={color}
  />
);
