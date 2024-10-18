import { HTMLAttributes } from 'react';

import { SizeOptions } from '../../types';
import { theme } from '../../styles/theme';

export type VARIANTS = keyof typeof theme.colors.tag;

export type StyledProps = {
  $size: SizeOptions;
  $variant: VARIANTS;
};

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeOptions;
  variant?: VARIANTS;
}
