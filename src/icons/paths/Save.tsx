/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Save = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      d="M8.66667 5.33332C8.20643 5.33332 7.83333 5.70642 7.83333 6.16666C7.83333 6.62689 8.20643 6.99999 8.66667 6.99999H14.5C14.9602 6.99999 15.3333 6.62689 15.3333 6.16666C15.3333 5.70642 14.9602 5.33332 14.5 5.33332H8.66667Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8217 2.00001C16.0389 1.99947 16.2541 2.04166 16.455 2.12419C16.6565 2.20693 16.8397 2.32859 16.994 2.48221L16.9955 2.48366L21.5178 7.00596C21.6714 7.16034 21.7931 7.3435 21.8758 7.54496C21.9584 7.74593 22.0005 7.96118 22 8.17843V20.3333C22 20.7754 21.8244 21.1993 21.5118 21.5118C21.1993 21.8244 20.7754 22 20.3333 22H3.66667C3.22464 22 2.80072 21.8244 2.48816 21.5118C2.17559 21.1993 2 20.7754 2 20.3333V3.66667C2 3.22464 2.1756 2.80072 2.48816 2.48816C2.80072 2.1756 3.22464 2.00001 3.66667 2.00001H15.8217ZM15.8215 3.66667L20.3333 8.17852V20.3333H17.8333V14.5C17.8333 14.058 17.6577 13.634 17.3452 13.3215C17.0326 13.0089 16.6087 12.8333 16.1667 12.8333H7.83333C7.39131 12.8333 6.96738 13.0089 6.65482 13.3215C6.34226 13.634 6.16667 14.058 6.16667 14.5V20.3333H3.66667L3.66667 3.66667L15.8215 3.66667ZM16.1667 14.5V20.3333H7.83333L7.83333 14.5H16.1667Z"
      fill={color}
    />
  </>
);
