/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Capelo = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.8311 1.58827C12.0517 1.47062 12.3164 1.47062 12.537 1.58827L23.787 7.58827C24.0314 7.71861 24.1841 7.97305 24.1841 8.25003C24.1841 8.52701 24.0314 8.78145 23.787 8.91179L21.5591 10.1V14.7657L21.5591 14.7689C21.5577 15.0898 21.4522 15.4016 21.2583 15.6573C20.9091 16.1259 20.0296 17.1675 18.559 18.0983V21.75C18.559 22.1642 18.2233 22.5 17.809 22.5C17.3948 22.5 17.059 22.1642 17.059 21.75V18.8944C15.7513 19.4655 14.1337 19.8751 12.1841 19.8751C6.67246 19.8751 3.81387 16.6018 3.10982 15.6573C2.91601 15.4016 2.81045 15.0898 2.8091 14.7689L2.80908 14.7657L2.80909 10.1L0.581141 8.91179C0.336743 8.78145 0.184082 8.52701 0.184082 8.25003C0.184082 7.97305 0.336743 7.71861 0.581141 7.58827L11.8311 1.58827ZM2.52783 8.25003L12.1841 3.10003L21.8403 8.25003C20.4958 8.96711 19.1536 9.68295 17.8091 10.4L12.537 7.58823C12.1715 7.39331 11.7172 7.53157 11.5223 7.89705C11.3274 8.26254 11.4656 8.71684 11.8311 8.91176L16.2153 11.25L12.1841 13.4C8.96348 11.6824 5.74629 9.96654 2.52783 8.25003ZM4.30909 10.9V14.7563L4.31073 14.7584C4.86694 15.5056 7.33308 18.3751 12.1841 18.3751C14.2158 18.3751 15.8291 17.8717 17.059 17.2318V12.5L12.537 14.9118C12.3164 15.0294 12.0517 15.0294 11.8311 14.9118L4.30909 10.9ZM18.559 16.2643C19.3545 15.6382 19.8452 15.0437 20.0575 14.7585L20.0591 14.7563V10.9L18.559 11.7V16.2643Z"
    fill={color}
  />
);
