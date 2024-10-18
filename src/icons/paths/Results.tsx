/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Results = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14.6766 3C14.2675 3 13.9358 3.33164 13.9358 3.74074V7.44444H9.49139C9.08229 7.44444 8.75065 7.77609 8.75065 8.18518V11.8889H4.30621C3.89711 11.8889 3.56547 12.2205 3.56547 12.6296V18.5556H2.82473C2.41563 18.5556 2.08398 18.8872 2.08398 19.2963C2.08398 19.7054 2.41563 20.037 2.82473 20.037H21.3432C21.7523 20.037 22.084 19.7054 22.084 19.2963C22.084 18.8872 21.7523 18.5556 21.3432 18.5556H20.6025V3.74074C20.6025 3.33164 20.2709 3 19.8618 3H14.6766ZM19.121 18.5556V4.48148H15.4173V18.5556H19.121ZM13.9358 18.5556V8.92593H10.2321V18.5556H13.9358ZM5.04695 13.3704H8.75065V18.5556H5.04695V13.3704Z"
    fill={color}
  />
);
