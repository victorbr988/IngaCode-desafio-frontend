import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Components/input',
  component: Input,
  args: {
    placeholderName: 'Digite sua senha',
    type: 'password',
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};

export const InputText: StoryObj<InputProps> = {
  args: {
    placeholderName: 'Digite seu nome',
    type: 'text',
  },
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: {
        type: 'inline-radio'
      }
    }
  }
};
