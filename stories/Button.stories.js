import Button from '../Base/Button/Button';
import { ShareIcon } from '../../components/Icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit']
      },
      description: 'Button type',
      defaultValue: 'button',
      type: { summary: 'button | submit' },
      table: {
        defaultValue: { summary: 'button' }
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      },
      description: 'Button size',
      defaultValue: 'md',
      type: { summary: 'xs | sm | md | lg | xl' },
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'accent',
          'danger',
          'warning',
          'info',
          'success',
          'dark',
          'light',
          'white',
          'black',
          'gray'
        ]
      },
      description: 'Button color',
      type: {
        summary:
          'primary | accent | danger | warning | info | success | dark | light | white | black | gray'
      },
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    color: {
      control: 'text',
      description: 'Button color for special occasions',
      table: {
        type: { summary: 'string' }
      }
    },
    bg: {
      control: 'text',
      description: 'Button background color for special occasions',
      table: {
        type: { summary: 'string' }
      }
    },
    outline: {
      control: 'boolean',
      description: 'Outline button',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      },
      defaultValue: false
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      },
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled button.',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      },
      defaultValue: false
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading. Use it when the form is loading',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      },
      defaultValue: false
    },
    margin: {
      control: 'text',
      description: 'Margin of input container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.5em 0' }
      },
      defaultValue: '0.5em 0'
    },
    padding: {
      control: 'text',
      description: 'Padding of input container. NOT WORK WITH ROUNDED PROPERY',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.8em 2em' }
      },
      defaultValue: '0.8em 2em'
    },
    onClick: {
      action: 'Click',
      description: 'onClick function',
      type: { summary: 'function' },
      control: { disable: true }
    },
    children: {
      control: 'text',
      description: 'Button text',
      table: {
        type: { summary: 'element' }
      }
    },
    IconLeft: {
      control: { disable: true },
      description: 'Icon in the left position inside the button',
      type: { summary: 'element' },
      defaultValue: ''
    },
    IconRight: {
      control: { disable: true },
      description: 'Icon in the right position inside the button',
      type: { summary: 'element' },
      defaultValue: ''
    },
    rounded: {
      control: 'boolean',
      description: 'Button rounded',
      type: { summary: 'bool' },
      defaultValue: false
    }
  },
  args: {
    children: 'Button Component'
  }
};

const Template = args => <Button {...args}></Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  size: 'md',
  variant: 'primary'
};
DefaultButton.storyName = 'Default Button';

export const CustomButton = Template.bind({});
CustomButton.args = {
  size: 'lg',
  variant: 'accent',
  outline: true,
  children: 'Custom Button'
};
CustomButton.storyName = 'Custom Button';

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  size: 'sm',
  variant: 'danger',
  isLoading: true,
  children: 'Loading Button'
};
LoadingButton.storyName = 'Loading Button';

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  size: 'xl',
  variant: 'success',
  disabled: true,
  children: 'Disabled Button'
};
DisabledButton.storyName = 'Disabled Button';

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  size: 'md',
  variant: 'info',
  children: 'FullWidth Button',
  fullWidth: true
};
FullWidthButton.storyName = 'FullWidth Button';

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  IconLeft: ShareIcon,
  size: 'md',
  children: 'Button With Icon'
};
ButtonWithIcon.storyName = 'Button With Icon';

export const ButtonWithIconRight = Template.bind({});
ButtonWithIconRight.args = {
  IconRight: ShareIcon,
  size: 'md',
  children: 'Button With Icon Right'
};
ButtonWithIconRight.storyName = 'Button With Icon Right';

export const ButtonRounded = Template.bind({});
ButtonRounded.args = {
  size: 'md',
  variant: 'info',
  children: '123',
  rounded: true
};
ButtonRounded.storyName = 'Button Rounded';

export const ButtonRoundedTwo = Template.bind({});
ButtonRoundedTwo.args = {
  size: 'md',
  variant: 'info',
  children: 'Long teeeeeext',
  rounded: true
};
ButtonRoundedTwo.storyName = 'Button Rounded Long text';

export const ButtonRoundedWithIcon = Template.bind({});
ButtonRoundedWithIcon.args = {
  size: 'md',
  variant: 'info',
  children: <ShareIcon color="#fff" width="14" />,
  rounded: true
};
ButtonRoundedWithIcon.storyName = 'Button Rounded With Icon';
