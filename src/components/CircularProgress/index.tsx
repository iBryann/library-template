import React from 'react';

import { IProgressBarProps } from './types';
import { SVGItem } from './styles';

export const CircularProgressBar = ({
  progress,
  barSize = '3.5',
  size = '100%',
}: IProgressBarProps) => {
  const maxProgress = 100;

  const radius = 15.91549430918954;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = progress / maxProgress;
  const offset = circumference * (1 - progressRatio);

  const defaultProgressBarColor = '#005FFB';

  const defaultBarColor = '#CCCCCC';

  return (
    <SVGItem>
      <svg width={size} height={size} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r={radius} fill="transparent"></circle>
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="transparent"
          stroke={defaultBarColor}
          strokeWidth={barSize}
        ></circle>
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke={defaultProgressBarColor}
          fill="transparent"
          strokeWidth={barSize}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          transform="rotate(-90 20 20)"
        ></circle>
      </svg>
    </SVGItem>
  );
};
