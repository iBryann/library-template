/* eslint-disable max-len */
import React from 'react';
import { PathProps } from '../types';

export const Trophy = ({ color = '#191919' }: PathProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.10367 3.4294C5.37861 3.15446 5.7515 3 6.14033 3H17.8688C18.2576 3 18.6305 3.15446 18.9054 3.4294C19.1804 3.70434 19.3348 4.07724 19.3348 4.46606V5.19909H21.5339C21.9228 5.19909 22.2957 5.35354 22.5706 5.62848C22.8455 5.90342 23 6.27632 23 6.66514V8.1312C23 9.10326 22.6139 10.0355 21.9265 10.7228C21.2392 11.4102 20.3069 11.7963 19.3349 11.7963H18.9973C18.1333 14.5437 15.608 16.6025 12.7376 16.891V19.1266H14.9367C15.3415 19.1266 15.6697 19.4548 15.6697 19.8597C15.6697 20.2645 15.3415 20.5927 14.9367 20.5927H9.07244C8.6676 20.5927 8.33941 20.2645 8.33941 19.8597C8.33941 19.4548 8.6676 19.1266 9.07244 19.1266H11.2715V16.8907C8.32354 16.5926 5.91055 14.5279 5.03144 11.7963H4.66514C3.69309 11.7963 2.76084 11.4102 2.0735 10.7228C1.38615 10.0355 1 9.10326 1 8.1312V6.66514C1 6.27632 1.15446 5.90342 1.4294 5.62848C1.70434 5.35355 2.07723 5.19909 2.46606 5.19909H4.67427V4.46606C4.67427 4.07723 4.82873 3.70434 5.10367 3.4294ZM4.67427 6.66514H2.46606V8.1312C2.46606 8.71443 2.69775 9.27378 3.11015 9.68619C3.52256 10.0986 4.08191 10.3303 4.66514 10.3303C4.76074 10.3303 4.67427 9.64618 4.67427 9.51479V6.66514ZM6.28589 10.8305C6.19062 10.4067 6.14033 9.96627 6.14033 9.51479V4.46606L17.8688 4.46606V9.59726C17.8688 10.0319 17.8205 10.4641 17.7254 10.8861C17.7232 10.8952 17.7211 10.9044 17.7192 10.9136C17.1096 13.5603 14.6604 15.4741 11.9643 15.4615C9.04731 15.4395 7.15215 13.4191 6.28589 10.8305ZM19.3348 9.59726V6.66514H21.5339V8.1312C21.5339 8.71443 21.3023 9.27378 20.8898 9.68619C20.4774 10.0986 19.9181 10.3303 19.3349 10.3303C19.2749 10.3303 19.3348 9.7021 19.3348 9.59726Z"
    fill={color}
  />
);
