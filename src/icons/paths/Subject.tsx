/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Subject = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      fill={color}
      d="M7.667 7.833a.833.833 0 1 0 0 1.667h6.666a.833.833 0 1 0 0-1.667H7.667ZM7.667 11.167a.833.833 0 1 0 0 1.666h6.666a.833.833 0 1 0 0-1.666H7.667ZM6.833 15.333c0-.46.373-.833.834-.833H11a.833.833 0 0 1 0 1.667H7.667a.833.833 0 0 1-.834-.834Z"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M21 3.667v12.497h-.003L15.182 22l-.002-.002V22H2.667C1.747 22 1 21.254 1 20.333V3.667C1 2.747 1.746 2 2.667 2h16.666C20.253 2 21 2.746 21 3.667Zm-18.182.151h16.364V14.5h-4.849a.833.833 0 0 0-.833.833v4.849H2.818V3.818Zm12.349 12.349h3.475l-3.475 3.487v-3.487Z"
      clipRule="evenodd"
    />
  </>
);
