import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/header',
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/dashboard',
    }
  }
} as Meta;

export const Default: StoryObj = {};
