import React, { HTMLAttributes, ReactNode } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  variant?: TitleVariants;
  color?: string;
}

const titleVariants = cva<any>(['text-gray-900 font-medium'], {
  variants: {
    variant: {
      h1: ['text-[32px] leading-10'],
      h2: ['text-2xl'],
      h3: ['text-xl'],
      h4: ['text-base tracking-[0.35px]'],
      h5: ['text-sm tracking-[0.1px]'],
      h6: ['text-xs tracking-[0.1px]'],
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

export const Title = ({
  className,
  children,
  variant = 'h1',
  color = '',
  ...props
}: TitleProps) => {
  const Element = variant;

  return (
    <Element
      className={'t-title ' + cn(titleVariants({ variant }), className)}
      {...props}
      {...(color ? { style: { ...props.style, color } } : {})}
    >
      {children}
    </Element>
  );
};
