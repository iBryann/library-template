import React from 'react';

import { Container } from './styles';
import { SpinnerProps } from './types';

export const Spinner = ({
  className = '',
  color = '#005FFB',
  size = 36,
  borderWidth = 5,
  ...props
}: SpinnerProps) => {
  return (
    <Container
      size={size}
      color={color}
      className={'t-spinner ' + className}
      $borderWidth={borderWidth}
      {...props}
    />
  );
};
