import { Meta, StoryObj } from '@storybook/react';

import { Icon, IconProps } from '../index';

const defaultStory: Meta<IconProps> = {
  title: 'components/Icon',
  component: Icon,
};

export default defaultStory;

export const Default: StoryObj<IconProps> = {
  args: {
    color: '#191919',
    size: 'md',
    name: 'Add',
  },
};
