/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Dashboard = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.08398 2.90909C2.08398 2.40701 2.491 2 2.99308 2H10.2658C10.7679 2 11.1749 2.40701 11.1749 2.90909V10.1818C11.1749 10.6839 10.7679 11.0909 10.2658 11.0909H2.99308C2.491 11.0909 2.08398 10.6839 2.08398 10.1818V2.90909ZM3.90217 3.81818V9.27273H9.35671V3.81818H3.90217Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.08398 13.8182C2.08398 13.3161 2.491 12.9091 2.99308 12.9091H21.1749C21.677 12.9091 22.084 13.3161 22.084 13.8182V21.0909C22.084 21.593 21.677 22 21.1749 22H2.99308C2.491 22 2.08398 21.593 2.08398 21.0909V13.8182ZM3.90217 14.7273V20.1818H20.2658V14.7273H3.90217Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.0031 6.46461C22.0031 8.93035 20.0042 10.9292 17.5385 10.9292C15.0727 10.9292 13.0739 8.93035 13.0739 6.46461C13.0739 3.99887 15.0727 2 17.5385 2C20.0042 2 22.0031 3.99887 22.0031 6.46461ZM20.1849 6.46461C20.1849 7.92619 19.0001 9.11104 17.5385 9.11104C16.0769 9.11104 14.892 7.92619 14.892 6.46461C14.892 5.00303 16.0769 3.81818 17.5385 3.81818C19.0001 3.81818 20.1849 5.00303 20.1849 6.46461Z"
      fill={color}
    />
  </>
);
