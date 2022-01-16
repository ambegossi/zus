import { StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '.';

type ButtonStory = StoryObj<ButtonProps>;

export default { title: 'Button', component: Button };

export const Primary: ButtonStory = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary: ButtonStory = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  },
};

export const Pill: ButtonStory = {
  args: {
    children: 'Pill Button',
    variant: 'secondary',
    pill: true
  },
};
