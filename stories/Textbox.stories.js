import Textbox from '../Base/Input/Textbox/Textbox';
import Paper from '../Base/Paper/Paper';
import {
  CalendarOutlineIcon,
  MailIcon,
  LockIcon
} from '../../components/Icons';
import inputArgs from './assets/args/inputArgs';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Textbox',
  component: Textbox,
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
    type: {
      control: 'text',
      description: 'input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      },
      defaultValue: 'text'
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
    placeholder: 'Email',
    defaultValue: 'emailexample@email.com'
  }
  // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => (
  <Paper padding="2rem">
    <Textbox {...args}></Textbox>
  </Paper>
);

export const DefaultTextbox = Template.bind({});
DefaultTextbox.args = {};
DefaultTextbox.storyName = 'Default Textbox';

export const CustomTextbox = Template.bind({});
CustomTextbox.args = {
  IconLeft: MailIcon
};
CustomTextbox.storyName = 'Custom Textbox';

export const ErrorTextbox = Template.bind({});
ErrorTextbox.args = {
  IconLeft: MailIcon,
  error: 'Email incorrecto'
};
ErrorTextbox.storyName = 'Error Textbox';

export const SuccessTextbox = Template.bind({});
SuccessTextbox.args = {
  IconLeft: MailIcon,
  success: 'Email ingresado correctamente'
};
SuccessTextbox.storyName = 'Success Textbox';

export const DisabledTextbox = Template.bind({});
DisabledTextbox.args = {
  IconLeft: MailIcon,
  disabled: true
};
DisabledTextbox.storyName = 'Disabled Textbox';

export const DatetimeLocalTextbox = Template.bind({});
DatetimeLocalTextbox.args = {
  placeholder: 'Date',
  name: 'date',
  type: 'datetime-local',
  IconRight: CalendarOutlineIcon
};
DatetimeLocalTextbox.storyName = 'Date time local Textbox';

export const PasswordTextbox = Template.bind({});
PasswordTextbox.args = {
  placeholder: 'Password',
  name: 'password',
  type: 'password',
  IconLeft: LockIcon
};
PasswordTextbox.storyName = 'Password Textbox';

export const TextboxWithCross = Template.bind({});
TextboxWithCross.args = {
  placeholder: 'Input with cross',
  name: 'crossInput',
  type: 'text',
  hasCross: true
};
TextboxWithCross.storyName = 'Textbox With Cross';
