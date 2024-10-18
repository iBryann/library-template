import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '.';
import { SpinnerProps } from './types';

const defaultStory: Meta<SpinnerProps> = {
  title: 'components/Spinner',
  component: Spinner,
  argTypes: {},
};

export default defaultStory;

export const Default: StoryObj<SpinnerProps> = {
  args: {
    color: '#005FFB',
    size: 36,
    borderWidth: 5,
  },
};
