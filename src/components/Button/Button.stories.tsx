import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { ButtonProps } from './types';

const defaultStory: Meta<ButtonProps> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    size: {
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-60">
        <Story />
      </div>
    ),
  ],
};

export default defaultStory;

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: 'fab',
    size: 'lg',
    children: 'Button component',
    disabled: false,
    block: false,
    closeModal: true,
  },
};
