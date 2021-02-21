import CheckboxGroup from '../Base/Input/Checkbox/CheckboxGroup';
import Checkbox from '../Base/Input/Checkbox/Checkbox';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Checkbox/Item',
  component: CheckboxGroup,
  argTypes: {
    id: {
      control: 'text',
      description: 'checkbox id',
      type: {
        required: true
      }
    },
    checked: {
      control: 'boolean'
    },
    title: {
      control: 'text'
    },

    disabled: {
      control: 'boolean'
    },
    onChange: {
      action: 'Click',
      control: { disable: true },
      description: 'onChange function',
      type: { summary: 'function' }
    }
  },
  args: {
    onChange: () => null,
    id: 'checkbox'
  }
  // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => <Checkbox {...args} />;

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {};
SingleCheckbox.storyName = 'Single Checkbox Item';

export const SingleCheckboxWithTitle = Template.bind({});
SingleCheckboxWithTitle.args = {
  title: 'Checkbox title'
};
SingleCheckboxWithTitle.storyName = 'Single Checkbox Item With Title';
export const SingleCheckboxDisabled = Template.bind({});
SingleCheckboxDisabled.args = {
  title: 'Checkbox disabled',
  disabled: true
};
SingleCheckboxDisabled.storyName = 'Single Checkbox Disabled';
