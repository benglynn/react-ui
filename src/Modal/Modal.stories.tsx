import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  children: "This is the content of the modal"
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Modal',
  children: "This is the content of the modal"
};

