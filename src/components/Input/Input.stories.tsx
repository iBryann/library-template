import { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';
import { InputProps } from './types';

const defaultStory: Meta<InputProps> = {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    feedbackType: {
      control: {
        type: 'inline-radio',
      },
    },
    iconSize: {
      control: {
        type: 'inline-radio',
      },
    },
    onChangeValue: { table: { disable: true } },
  },
};

export default defaultStory;

export const Default: StoryObj<InputProps> = {
  args: {
    label: 'Input field',
    placeholder: 'Type here',
    icon: 'Add',
    iconLeft: 'Add',
    iconSize: 'md',
    iconColor: '#333',
    iconAction: () => {},
    onChangeValue: () => {},
    disabled: false,
    required: false,
    feedbackShow: false,
    feedbackType: 'success',
    feedbackMessage: 'Feedback message',
  },
};
