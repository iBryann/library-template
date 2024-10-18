import { ButtonHTMLAttributes } from 'react';

import { SizeOptions } from '../..';

export type ButtonVariants =
  | 'fab'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'neutral'
  | 'tertiaryNeutral'
  | 'destructive'
  | 'tertiaryDestructive';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  closeModal?: boolean;
  disabled?: boolean;
  size?: SizeOptions;
  variant?: ButtonVariants;
}
