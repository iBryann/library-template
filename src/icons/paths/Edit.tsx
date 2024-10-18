/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Edit = ({ color = '#191919' }: PathProps) => (
  <path
    d="M21.9619 7.54325C21.8806 7.33997 21.7585 7.16109 21.6039 7.01474L17.0718 2.48582C16.9172 2.33133 16.7382 2.20937 16.5429 2.12806C16.1442 1.95731 15.6804 1.95731 15.2898 2.12806C15.0946 2.20937 14.9156 2.33133 14.761 2.48582L2.55591 14.6822C2.40132 14.8367 2.2874 15.0074 2.20603 15.2107C2.12467 15.4058 2.08398 15.6172 2.08398 15.8286V20.3738C2.08398 20.8048 2.25485 21.2113 2.56405 21.5203C2.87324 21.8293 3.28008 22 3.71132 22H8.25974C8.47129 22 8.67471 21.9593 8.86999 21.878C9.06527 21.7967 9.24428 21.6829 9.39887 21.5284L21.5958 9.34018C21.7504 9.18569 21.8724 9.00681 21.9538 8.81167C22.0352 8.60839 22.084 8.39699 22.084 8.17746C22.084 7.95792 22.0433 7.74652 21.9538 7.55138L21.9619 7.54325ZM8.25974 20.3738H3.71132V15.8368L12.6617 6.88464L17.202 11.4217L8.2516 20.3657L8.25974 20.3738ZM18.3574 10.2834L13.8171 5.74632L15.9245 3.64041L20.4566 8.18559L18.3574 10.2834Z"
    fill={color}
  />
);
