import React from 'react';
import Textarea from '../components/Base/Input/Textarea/Textarea';
import { MailIcon } from '../components/Icons';
import inputArgs from './assets/args/inputArgs';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Textarea',
  component: Textarea,
  argTypes: {
    ...inputArgs,
    IconLeft: {
      control: { disable: true },
      description: 'Icon in the left position inside the input',
      type: { summary: 'element' },
      defaultValue: ''
    },
    IconRight: {
      control: { disable: true },
      description: 'Icon in the right position inside the input',
      type: { summary: 'element' },
      defaultValue: ''
    },
    ref: {
      description: 'Reack hook form ref',
      type: { summary: 'ref', required: true },
      control: { disable: true }
    }
  },
  args: {
    name: 'email',
    type: 'email',
    placeholder: 'Email'
  }
  // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => <Textarea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = {};
DefaultTextarea.storyName = 'Default Textarea';

export const CustomTextarea = Template.bind({});
CustomTextarea.args = {
  IconLeft: MailIcon
};
CustomTextarea.storyName = 'Custom Textarea';
