/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Print = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      d="M18.6667 10.7778C18.6667 11.3914 18.1692 11.8889 17.5556 11.8889C16.9419 11.8889 16.4444 11.3914 16.4444 10.7778C16.4444 10.1641 16.9419 9.66667 17.5556 9.66667C18.1692 9.66667 18.6667 10.1641 18.6667 10.7778Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.07407 3C5.66497 3 5.33333 3.33164 5.33333 3.74074V6.7037H4.34259C3.10984 6.7037 2 7.64819 2 8.92593V16.3333C2 16.7424 2.33164 17.0741 2.74074 17.0741H5.33333V20.4074C5.33333 20.8165 5.66497 21.1481 6.07407 21.1481H17.9259C18.335 21.1481 18.6667 20.8165 18.6667 20.4074V17.0741H21.2593C21.6684 17.0741 22 16.7424 22 16.3333V8.92593C22 7.64819 20.8902 6.7037 19.6574 6.7037H18.6667V3.74074C18.6667 3.33164 18.335 3 17.9259 3H6.07407ZM4.34259 8.18519H19.6574C20.1839 8.18519 20.5185 8.57403 20.5185 8.92593V15.5926H18.6667V14.1111C18.6667 13.702 18.335 13.3704 17.9259 13.3704H6.07407C5.66497 13.3704 5.33333 13.702 5.33333 14.1111V15.5926H3.48148V8.92593C3.48148 8.57403 3.81608 8.18519 4.34259 8.18519ZM6.81481 6.7037H17.1852V4.48148H6.81481V6.7037ZM6.81481 14.8519H17.1852V19.6667H6.81481V14.8519Z"
      fill={color}
    />
  </>
);
