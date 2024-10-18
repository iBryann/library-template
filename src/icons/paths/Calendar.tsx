/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Calendar = ({ color = '#191919' }: PathProps) => (
  <>
    <path
      d="M7.34619 12.8462C7.34619 12.3788 7.72503 12 8.19235 12H11.1539C11.4791 12 11.7756 12.1864 11.9165 12.4796C12.0574 12.7728 12.0178 13.1208 11.8146 13.3747L10.8781 14.5454C11.1525 14.7294 11.389 14.9656 11.5737 15.2415C11.8062 15.5886 11.9494 15.9877 11.9906 16.4035C12.0318 16.8192 11.9697 17.2387 11.8099 17.6247C11.6502 18.0107 11.3976 18.3513 11.0746 18.6163C10.7517 18.8813 10.3683 19.0625 9.95851 19.1438C9.54873 19.2251 9.12522 19.204 8.72555 19.0824C8.32587 18.9608 7.96239 18.7424 7.66734 18.4466C7.3373 18.1158 7.33794 17.58 7.66879 17.25C7.99963 16.92 8.53538 16.9206 8.86543 17.2514C8.96378 17.35 9.08494 17.4228 9.21816 17.4634C9.35139 17.5039 9.49256 17.5109 9.62915 17.4838C9.76574 17.4567 9.89354 17.3963 10.0012 17.308C10.1088 17.2197 10.193 17.1061 10.2463 16.9775C10.2996 16.8488 10.3202 16.709 10.3065 16.5704C10.2928 16.4318 10.245 16.2988 10.1676 16.1831C10.0901 16.0673 9.98524 15.9725 9.86234 15.9071C9.73944 15.8416 9.60228 15.8075 9.46302 15.8077C9.1375 15.8082 8.84051 15.622 8.69925 15.3287C8.55798 15.0355 8.59749 14.6871 8.80084 14.433L9.39336 13.6923H8.19235C7.72503 13.6923 7.34619 13.3135 7.34619 12.8462Z"
      fill={color}
    />
    <path
      d="M16.2308 12.8462C16.2308 12.5257 16.0497 12.2327 15.7631 12.0893C15.4764 11.946 15.1334 11.9769 14.877 12.1692L13.1847 13.4385C12.8108 13.7189 12.735 14.2492 13.0154 14.6231C13.2958 14.9969 13.8262 15.0727 14.2 14.7923L14.5385 14.5385V18.3462C14.5385 18.8135 14.9173 19.1923 15.3847 19.1923C15.852 19.1923 16.2308 18.8135 16.2308 18.3462V12.8462Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      d="M17.9231 1.84615C17.9231 1.37884 17.5443 1 17.077 1C16.6096 1 16.2308 1.37884 16.2308 1.84615V2.69231H7.76927V1.84615C7.76927 1.37884 7.39043 1 6.92311 1C6.4558 1 6.07696 1.37884 6.07696 1.84615V2.69231H3.5385C2.60386 2.69231 1.84619 3.44998 1.84619 4.38462V21.3077C1.84619 22.2423 2.60386 23 3.5385 23H20.4616C21.3962 23 22.1539 22.2423 22.1539 21.3077V4.38462C22.1539 3.44998 21.3962 2.69231 20.4616 2.69231H17.9231V1.84615ZM20.4616 4.38462H17.9231V5.23077C17.9231 5.69809 17.5443 6.07692 17.077 6.07692C16.6096 6.07692 16.2308 5.69809 16.2308 5.23077V4.38462H7.76927V5.23077C7.76927 5.69809 7.39043 6.07692 6.92311 6.07692C6.4558 6.07692 6.07696 5.69809 6.07696 5.23077V4.38462H3.5385V7.76923H20.4616V4.38462ZM3.5385 9.46154H20.4616V21.3077H3.5385V9.46154Z"
      fill={color}
    />
  </>
);
