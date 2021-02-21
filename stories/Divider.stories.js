import React from 'react';
import Divider from '../components/Base/Divider/Divider';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal']
      },
      description: 'Divider orientation',
      type: { summary: 'vertical | horizontal' },
      defaultValue: 'horizontal'
    },
    fullWidth: {
      control: 'boolean',
      description: 'If divider is fullWidth will occupy 100%, else 80%',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: true }
      },
      defaultValue: true
    },
    size: {
      control: 'number',
      description: 'Divider thickness',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      defaultValue: 1
    },
    margin: {
      control: 'text',
      description: 'Divider margin',
      table: {
        type: { summary: 'string | number (0)' },
        defaultValue: {
          summary:
            '"auto 1rem" (orientation vertical) or "1rem auto" (orientation horizontal)'
        }
      }
    }
  },
  args: {}
};

const Template = args => {
  return (
    <div
      style={{
        height: 100,
        display: args.orientation === 'vertical' ? 'flex' : 'block',
        alignItems: 'center'
      }} // some container
    >
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <Divider {...args} />
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  );
};

export const DefaultDivider = Template.bind({});
DefaultDivider.args = {};
DefaultDivider.storyName = 'Default Divider';

export const CustomDivider = Template.bind({});
CustomDivider.args = {
  orientation: 'vertical',
  size: 2,
  fullWidth: false
};
CustomDivider.storyName = 'Custom Divider';
