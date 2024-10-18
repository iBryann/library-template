import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '../Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['#1a1a1a']
      }
    }
  }
} satisfies Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {
    variant: 'display-lg',
    children: 'Text component',
    as: 'div',
    color: '#1a1a1a'
  },
};