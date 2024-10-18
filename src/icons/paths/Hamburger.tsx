/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Hamburguer = ({ color = '#191919' }: PathProps) => (
  <path
    fill={color}
    fillRule="evenodd"
    d="M2.916 12.5c0-.46.373-.833.833-.833h18.334a.833.833 0 0 1 0 1.666H3.749a.833.833 0 0 1-.833-.833ZM2.916 5.833c0-.46.373-.833.833-.833h18.334a.833.833 0 0 1 0 1.667H3.749a.833.833 0 0 1-.833-.834ZM2.916 19.167c0-.46.373-.834.833-.834h18.334a.833.833 0 0 1 0 1.667H3.749a.833.833 0 0 1-.833-.833Z"
    clipRule="evenodd"
  />
);
