import { fn } from 'storybook/test';

import { Button } from '../src';
// import { Button } from '../dist/src';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: 'Primary Button',
  },
};
