import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '..';
import { IProps } from '../types';

const defaultStory: Meta<IProps> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: { table: { disable: true } },
    size: {
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export default defaultStory;

export const Default: StoryObj<IProps> = {
  args: {
    children: 'Tag',
    size: 'md',
    variant: 'science',
  },
};
