import { HTMLAttributes } from 'react';

export interface Props {
  color?: string;
  size?: number;
  borderWidth?: number;
}

export interface StyleProps {
  color?: string;
  size?: number;
  $borderWidth?: number;
}

export interface SpinnerProps
  extends Props,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {}
