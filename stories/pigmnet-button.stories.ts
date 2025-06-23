import { fn } from 'storybook/test';

import { PigmentButton } from '../src';
// import { Button } from '../dist/src';

export default {
  title: 'Example/PigmentButton',
  component: PigmentButton,
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
