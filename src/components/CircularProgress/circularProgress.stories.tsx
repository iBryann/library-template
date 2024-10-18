import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { CircularProgressBar } from '.';
import { IProgressBarProps } from './types';

const defaultStory: Meta<IProgressBarProps> = {
  title: 'components/CircularProgressBar',
  component: CircularProgressBar,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default defaultStory;

export const Default: StoryObj<IProgressBarProps> = {
  args: {
    progress: 20,
    size: '100%',
    barSize: '3.5',
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};
