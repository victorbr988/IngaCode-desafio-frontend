import { Meta, StoryObj } from '@storybook/react';
import { Text } from "./Text";
import { TextProps } from './types';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello world',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      } 
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj = {};

export const Large: StoryObj<TextProps> = {
  args: {
    children: 'Hello world',
    size: 'lg'
  }
};

export const Small: StoryObj<TextProps> = {
  args: {
    children: 'Hello world',
    size: 'sm'
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Hello World</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    children: 'Hello world',
    size: 'xs'
  }
};

