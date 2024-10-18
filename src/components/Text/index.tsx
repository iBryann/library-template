import React, { HTMLAttributes, ReactHTML, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

export type TextVariants =
  | 'display-lg'
  | 'display'
  | 'display-sm'
  | 'button-lg'
  | 'button'
  | 'button-sm'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'label-lg'
  | 'label'
  | 'label-sm'
  | 'overline';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof ReactHTML;
  children?: ReactNode;
  variant?: TextVariants;
  color?: string;
}

const textVariants = cva<any>(['text-gray-900 font-medium'], {
  variants: {
    variant: {
      'display-lg': ['text-[52px] leading-[64px]'],
      display: ['text-[44px] leading-[52px]'],
      'display-sm': ['text-[36px] leading-[44px]'],

      'button-lg': ['text-[16px] leading-[19.5px] tracking-[0.35px]'],
      button: ['text-[14px] leading-[17px] tracking-[0.35px]'],
      'button-sm': ['text-[12px] leading-[14.5px] tracking-[0.5px]'],

      'body-lg': ['text-base tracking-[0.15px] font-normal'],
      body: ['text-sm tracking-[0.2px] font-normal'],
      'body-sm': ['text-xs tracking-[0.3px] font-normal'],

      'label-lg': ['text-[14px] leading-[20px] tracking-[0.1px]'],
      label: ['text-[12px] leading-[16px] tracking-[0.5px]'],
      'label-sm': ['text-[11px] leading-[16px] tracking-[0.5px]'],

      overline: ['text-[12px] leading-[14.5px] tracking-[1.5px] font-normal'],
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export const Text = ({
  as: Element = 'div',
  className,
  children,
  variant,
  color = '',
  ...props
}: TextProps) => {
  return (
    <Element
      {...props}
      className={'t-text ' + cn(className, textVariants({ variant }))}
      {...(color ? { style: { ...props.style, color } } : {})}
    >
      {children}
    </Element>
  );
};
