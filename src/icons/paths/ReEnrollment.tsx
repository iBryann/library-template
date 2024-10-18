/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const ReEnrollment = ({ color = '#191919' }: PathProps) => (
  <path
    d="M23.7806 12.5306L21.5306 14.7806C21.461 14.8504 21.3782 14.9057 21.2872 14.9434C21.1961 14.9812 21.0986 15.0006 21 15.0006C20.9014 15.0006 20.8038 14.9812 20.7128 14.9434C20.6217 14.9057 20.539 14.8504 20.4694 14.7806L18.2194 12.5306C18.0786 12.3899 17.9996 12.199 17.9996 12C17.9996 11.801 18.0786 11.6101 18.2194 11.4694C18.3601 11.3286 18.551 11.2496 18.75 11.2496C18.949 11.2496 19.1399 11.3286 19.2806 11.4694L20.25 12.4397V12C20.2509 10.2531 19.6972 8.551 18.6687 7.13892C17.6403 5.72684 16.1901 4.67767 14.5272 4.14254C12.8643 3.60742 11.0744 3.61396 9.41543 4.16123C7.75646 4.7085 6.31403 5.76825 5.29593 7.18781C5.17981 7.34943 5.00425 7.4583 4.80787 7.49047C4.61148 7.52265 4.41036 7.47549 4.24874 7.35938C4.08712 7.24326 3.97825 7.0677 3.94608 6.87131C3.9139 6.67493 3.96106 6.4738 4.07718 6.31219C5.28045 4.63455 6.98519 3.38217 8.94582 2.73545C10.9065 2.08874 13.0218 2.08108 14.987 2.71358C16.9523 3.34609 18.6661 4.58609 19.8815 6.25497C21.0968 7.92386 21.7511 9.93546 21.75 12V12.4397L22.7194 11.4694C22.8601 11.3286 23.051 11.2496 23.25 11.2496C23.449 11.2496 23.6399 11.3286 23.7806 11.4694C23.9213 11.6101 24.0004 11.801 24.0004 12C24.0004 12.199 23.9213 12.3899 23.7806 12.5306ZM19.92 17.6869C18.7164 19.3632 17.0119 20.6145 15.0519 21.2604C13.0919 21.9064 10.9774 21.9138 9.01296 21.2816C7.04848 20.6493 5.33528 19.41 4.11996 17.7421C2.90465 16.0742 2.24991 14.0637 2.24999 12V11.5603L1.28061 12.5306C1.13988 12.6714 0.949013 12.7504 0.74999 12.7504C0.550967 12.7504 0.360095 12.6714 0.219365 12.5306C0.0786343 12.3899 -0.000427246 12.199 -0.000427246 12C-0.000427246 11.801 0.0786343 11.6101 0.219365 11.4694L2.46936 9.21938C2.53902 9.14964 2.62174 9.09432 2.71278 9.05658C2.80383 9.01884 2.90143 8.99941 2.99999 8.99941C3.09855 8.99941 3.19615 9.01884 3.28719 9.05658C3.37824 9.09432 3.46096 9.14964 3.53061 9.21938L5.78061 11.4694C5.92135 11.6101 6.00041 11.801 6.00041 12C6.00041 12.199 5.92135 12.3899 5.78061 12.5306C5.63988 12.6714 5.44901 12.7504 5.24999 12.7504C5.05097 12.7504 4.8601 12.6714 4.71936 12.5306L3.74999 11.5603V12C3.74821 14.0196 4.49047 15.969 5.83499 17.4759C6.67146 16.2638 7.84763 15.3261 9.21562 14.7806C8.48079 14.2019 7.94458 13.4085 7.68156 12.5108C7.41853 11.6132 7.44177 10.6559 7.74804 9.77208C8.05431 8.88825 8.62838 8.12183 9.39042 7.5794C10.1525 7.03696 11.0646 6.74548 12 6.74548C12.9354 6.74548 13.8475 7.03696 14.6096 7.5794C15.3716 8.12183 15.9457 8.88825 16.2519 9.77208C16.5582 10.6559 16.5814 11.6132 16.3184 12.5108C16.0554 13.4085 15.5192 14.2019 14.7844 14.7806C16.1536 15.3262 17.3306 16.265 18.1669 17.4788C18.3565 17.2658 18.5352 17.0433 18.7022 16.8122C18.8183 16.6506 18.9939 16.5417 19.1902 16.5095C19.3866 16.4774 19.5877 16.5245 19.7494 16.6406C19.911 16.7567 20.0199 16.9323 20.052 17.1287C20.0842 17.3251 20.037 17.5262 19.9209 17.6878L19.92 17.6869ZM12 14.25C12.5933 14.25 13.1734 14.0741 13.6667 13.7444C14.16 13.4148 14.5446 12.9462 14.7716 12.3981C14.9987 11.8499 15.0581 11.2467 14.9423 10.6647C14.8266 10.0828 14.5409 9.54824 14.1213 9.12868C13.7018 8.70912 13.1672 8.4234 12.5853 8.30764C12.0033 8.19189 11.4001 8.2513 10.8519 8.47836C10.3038 8.70542 9.83523 9.08994 9.50558 9.58329C9.17594 10.0766 8.99999 10.6567 8.99999 11.25C8.99999 12.0457 9.31606 12.8087 9.87867 13.3713C10.4413 13.9339 11.2043 14.25 12 14.25ZM12 20.25C13.8304 20.2476 15.6083 19.638 17.055 18.5166C16.5124 17.668 15.765 16.9697 14.8816 16.486C13.9981 16.0023 13.0072 15.7487 12 15.7487C10.9928 15.7487 10.0018 16.0023 9.11842 16.486C8.23499 16.9697 7.48755 17.668 6.94499 18.5166C8.38951 19.642 10.1688 20.2521 12 20.25Z"
    fill={color}
  />
);
