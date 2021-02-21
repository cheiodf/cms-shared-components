import React from 'react';
import Hidden from '../components/Base/Hidden/Hidden';
import { breakpoints } from '../utils/constants/breakpoints';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Hidden',
  component: Hidden,
  argTypes: {
    children: {
      control: 'text',
      description: 'Component ',
      table: {
        type: { summary: 'element' }
      }
    },
    only: {
      control: {
        type: 'text'
      },
      description:
        'Only prop is a String. To which you can pass the diffrent breakpoints separated by a space. For example: "xs lg". In this case the component inside Hidden wil not show if the screen is between **xs and sm** and **lg and xl** ',
      type: { summary: Object.keys(breakpoints).join(' | ') },
      defaultValue: 'horizontal'
    },
    up: {
      control: {
        type: 'select',
        options: Object.keys(breakpoints)
      },
      description: 'Screens this size and up will be hidden',
      type: { summary: Object.keys(breakpoints).join(' | ') }
    },
    down: {
      control: {
        type: 'select',
        options: Object.keys(breakpoints)
      },
      description: 'Screens this size and down will be hidden',
      type: { summary: Object.keys(breakpoints).join(' | ') }
    }
  },
  args: {}
};

const Template = args => {
  return (
    <Hidden {...args}>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </Hidden>
  );
};

export const HiddenOnly = Template.bind({});
HiddenOnly.args = {
  only: 'xs lg'
};
HiddenOnly.storyName = 'Hidden Only';
