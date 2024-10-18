/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Export = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      d="M11.5284 2.21216C11.5156 2.22368 11.503 2.2356 11.4909 2.2479L7.11973 6.61908C6.79429 6.94451 6.79429 7.47215 7.11973 7.79759C7.44517 8.12303 7.9728 8.12303 8.29824 7.79759L11.2506 4.8452V14.5C11.2506 14.9602 11.6237 15.3333 12.084 15.3333C12.5442 15.3333 12.9173 14.9602 12.9173 14.5V4.84515L15.8697 7.79759C16.1952 8.12303 16.7228 8.12303 17.0482 7.79759C17.3737 7.47215 17.3737 6.94451 17.0482 6.61908L12.6732 2.24408C12.5908 2.16163 12.4954 2.10007 12.3936 2.0594C12.2993 2.02167 12.1966 2.00065 12.089 2.00001L11.4909 2.2479L12.084 2C11.9674 2 11.8564 2.02394 11.7556 2.06718C11.6743 2.10198 11.5975 2.15031 11.5284 2.21216Z"
      fill={color}
    />
    <path
      d="M3.75065 14.5C3.75065 14.0398 3.37756 13.6667 2.91732 13.6667C2.45708 13.6667 2.08398 14.0398 2.08398 14.5V20.3333C2.08398 20.7754 2.25958 21.1993 2.57214 21.5118C2.8847 21.8244 3.30862 22 3.75065 22H20.4173C20.8593 22 21.2833 21.8244 21.5958 21.5118C21.9084 21.1993 22.084 20.7754 22.084 20.3333V14.5C22.084 14.0398 21.7109 13.6667 21.2507 13.6667C20.7904 13.6667 20.4173 14.0398 20.4173 14.5V20.3333H3.75065V14.5Z"
      fill={color}
    />
  </>
);
