import { Meta, StoryObj } from '@storybook/react';

import { Title, TitleProps } from '../Title';

export default {
  title: 'components/Title',
  component: Title,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['#1a1a1a']
      }
    }
  }
} satisfies Meta<TitleProps>;

export const Default: StoryObj<TitleProps> = {
  args: {
    variant: 'h1',
    children: 'Title component',
    color: '#1a1a1a',
  },
};