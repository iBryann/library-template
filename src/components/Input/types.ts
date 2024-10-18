import { InputHTMLAttributes } from 'react';

import { ICON_NAMES } from '../../icons';
import { IFeedback } from '../Feedback/types';
import { SizeOptions } from '../../types';

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  IFeedback & {
    icon?: ICON_NAMES;
    iconLeft?: ICON_NAMES;
    iconSize?: SizeOptions;
    iconColor?: string;
    iconAction?: () => void;
    label?: string;
    disabled?: boolean;
    onChangeValue?: (value: string | string[]) => void;
  };

export interface IContainer {
  $hasIcon: boolean;
  $hasAction: boolean;
}
