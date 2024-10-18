/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const CollapsePanel = ({ color = '#191919' }: PathProps) => (
  <path
    fill={color}
    fillRule="evenodd"
    d="M2.084 5.538c0-.85.689-1.538 1.538-1.538h16.924c.85 0 1.538.689 1.538 1.538v13.847c0 .85-.689 1.538-1.538 1.538H3.622c-.85 0-1.538-.689-1.538-1.538V5.538Zm1.538 0H7.47v13.847H3.622V5.538Zm5.385 0v13.847h11.539V5.538H9.007Z"
    clipRule="evenodd"
  />
);
