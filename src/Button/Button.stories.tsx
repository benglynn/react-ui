import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Button',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true
};

