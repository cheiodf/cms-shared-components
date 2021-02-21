import CheckboxGroup from '../Base/Input/Checkbox/CheckboxGroup';
import inputArgs from './assets/args/inputArgs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Checkbox/Group',
  component: CheckboxGroup,
  argTypes: {
    ...inputArgs,
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column']
      },
      description: 'CheckboxGroup direction',
      defaultValue: 'column',
      table: {
        type: { summary: 'row | column' },
        defaultValue: { summary: 'column' }
      }
    },

    options: {
      control: { disable: true },
      description: 'Checkbox options',
      type: {
        summary: 'array',
        detail:
          'Array of objects, where each object has to have two keys: value and title, both are strings',
        required: true
      }
    }
  },
  args: {
    options: [
      { value: 'itemId', title: 'Item One' },
      { value: 'itemId2', title: 'Item Two' },
      { value: 'itemId3', title: 'Item Three' },
      { value: 'itemId4', title: 'Item Four' },
      { value: 'itemId5', title: 'Item Five' }
    ],
    name: 'checkbox',
    placeholder: 'Checkbox Title'
  }
  // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => <CheckboxGroup {...args} />;

export const DefaultCheckboxGroup = Template.bind({});
DefaultCheckboxGroup.args = {};
DefaultCheckboxGroup.storyName = 'Checkbox Group';

export const CheckboxGroupRow = Template.bind({});
CheckboxGroupRow.args = {
  direction: 'row',
  name: 'checkbox2'
};
CheckboxGroupRow.storyName = 'Checkbox Row';

export const CheckboxGroupError = Template.bind({});
CheckboxGroupError.args = {
  error: 'Error text',
  name: 'checkbox3'
};
CheckboxGroupError.storyName = 'Checkbox Error';

export const CheckboxGroupSuccess = Template.bind({});
CheckboxGroupSuccess.args = {
  success: 'Success text',
  name: 'checkbox4'
};
CheckboxGroupSuccess.storyName = 'Checkbox Success';

export const CheckboxGroupDisabled = Template.bind({});
CheckboxGroupDisabled.args = {
  disabled: true,
  name: 'checkbox5'
};
CheckboxGroupDisabled.storyName = 'Checkbox Disabled';

export const CheckboxDefaultGroupValue = Template.bind({});
CheckboxDefaultGroupValue.args = {
  defaultValue: ['itemId2', 'itemId4'],
  name: 'checkbox6'
};
CheckboxDefaultGroupValue.storyName = 'Checkbox with Default Value';
