import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { InputProps } from './types';

export default {
  title: 'Components/input',
  component: Input,
  args: {
    placeholderName: 'Digite sua senha',
    type: 'password',
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'datetime-local'],
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
      options: ['text', 'password', 'datetime-local'],
      control: {
        type: 'inline-radio'
      }
    }
  }
};

export const InputDate: StoryObj<InputProps> = {
  args: {
    placeholderName: 'Digite seu nome',
    type: 'datetime-local',
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'datetime-local'],
      control: {
        type: 'inline-radio'
      }
    }
  }
};
