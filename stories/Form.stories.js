import React from 'react';
import Button from '../components/Base/Button/Button';
import Form from '../components/Base/Form/Form';
import Textbox from '../components/Base/Input/Textbox/Textbox';
import Paper from '../components/Base/Paper/Paper';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    onSubmit: {
      control: { disable: true },
      description: 'Form on submit function',
      type: { summary: 'func' }
    },
    loading: {
      control: 'boolean',
      description: 'Form loading',
      type: { summary: 'bool' }
    },
    children: {
      control: { disable: true },
      description: 'Form children elements',
      type: { summary: 'any' }
    }
  },
  args: {}
};

const Template = args => {
  return (
    <Form {...args}>
      <Textbox placeholder="Some inputs" />
      <Button loading={args.loading}>Send</Button>
    </Form>
  );
};

export const FormComponent = Template.bind({});
FormComponent.args = {};
FormComponent.storyName = 'Form';

export const FormWithPaper = args => {
  return (
    <Paper padding="1rem 2rem">
      <Form {...args}>
        <Textbox placeholder="Some inputs" />
        <Button loading={args.loading} type="submit">
          Send
        </Button>
      </Form>
    </Paper>
  );
};
FormWithPaper.args = {};
FormWithPaper.storyName = 'Form with paper';
