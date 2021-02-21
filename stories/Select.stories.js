import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Base/Button/Button';
import Select from '../components/Base/Input/Select/Select';
import Paper from '../components/Base/Paper/Paper';
import { MailIcon } from '../components/Icons';
import inputArgs from './assets/args/inputArgs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Select',
  component: Select,
  argTypes: {
    ...inputArgs,
    IconLeft: {
      control: { disable: true },
      description: 'Icon in the left position inside the input',
      type: { summary: 'element' }
    },
    options: {
      control: { disable: true },
      description: 'Options for the select',
      type: {
        summary: 'array',
        detail:
          'Array of objects, where each object has to have two keys: value and title, both are strings',
        required: true
      }
    },
    rules: {
      control: 'object',
      description: 'Validation rules in the same format as for register.',
      type: { summary: 'object' }
    },
    setValue: {
      control: { disable: true },
      action: 'Set value function of reack-hook-form',
      description: 'Set value function of reack-hook-form',
      type: { summary: 'function', required: true }
    }
  },
  args: {
    options: [
      { value: 'itemId', title: 'Item One' },
      { value: 'itemId1', title: 'Item Two' },
      { value: 'itemId2', title: 'Item Three' },
      { value: 'itemId3', title: 'Item Four' },
      { value: 'itemId4', title: 'Item Five' },
      { value: 'itemId5', title: 'Item Six' },
      { value: 'itemId6', title: 'Item Seven' }
    ],
    name: 'selectName',
    placeholder: 'Select placeholder',
    rules: { required: true }
  }
  // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => {
  const { handleSubmit, control, setValue, errors } = useForm();

  const onSubmit = data => {
    console.log(data, 'data');
  };

  console.log(errors.selectName, 'errors');

  return (
    <Paper padding="2rem">
      <form onSubmit={handleSubmit(onSubmit)} aria-label="form">
        <Select
          setValue={setValue}
          control={control}
          error={
            errors?.selectName?.type === 'required' ? 'Campo requerido' : null
          }
          {...args}
        />
        <Button type="submit">Send data</Button>
      </form>
    </Paper>
  );
};

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {};
DefaultSelect.storyName = 'Select  (one value)';

export const CustomSelect = Template.bind({});
CustomSelect.args = {
  multiple: true,
  IconLeft: MailIcon
};
CustomSelect.storyName = 'Custom Select (multiple values)';

export const ErrorSelect = Template.bind({});
ErrorSelect.args = {
  multiple: true,
  error: 'Error text'
};
ErrorSelect.storyName = 'Error Select';

export const SuccessSelect = Template.bind({});
SuccessSelect.args = {
  multiple: true,
  success: 'Success text'
};
SuccessSelect.storyName = 'Success Select';

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  multiple: true,
  disabled: true
};
DisabledSelect.storyName = 'Disabled Select';

export const SelectWithCross = Template.bind({});
SelectWithCross.args = {
  multiple: true,
  hasCross: true
};
SelectWithCross.storyName = 'Select With cross';
