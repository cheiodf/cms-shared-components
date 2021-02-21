import React from 'react';
import Badge from '../components/Base/Badge/Badge';
import Button from '../components/Base/Button/Button';
import { BellIcon } from '../components/Icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'accent',
          'default',
          'info',
          'success',
          'warning',
          'danger'
        ]
      },
      description: 'Badge color',
      type: {
        summary:
          'primary | accent | default | info | success | warning | danger'
      },
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    content: {
      control: 'number',
      description: 'Badge number. If content is zero it will not show.',
      type: {
        summary: 'number'
      },
      defaultValue: '0',
      table: {
        defaultValue: { summary: '0' }
      }
    },
    max: {
      control: 'number',
      description:
        'Badge max number. If the content is older than max, then it will be displayed: "***max*+**"',
      type: {
        summary: 'number'
      },
      defaultValue: '99',
      table: {
        defaultValue: { summary: '99' }
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
      },
      description: 'Badge size',
      type: { summary: 'xxs | xs | sm | md | lg | xl' },
      defaultValue: 'sm'
    }
  },
  args: {
    variant: 'primary',
    max: 99
  }
};

const Template = args => (
  <Badge {...args}>
    <BellIcon width="2em" color="var(--text-default)" />
  </Badge>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  content: 10
};
DefaultBadge.storyName = 'Badge';

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  variant: 'accent',
  content: 342
};
CustomBadge.storyName = 'Custom Badge';

export const BadgeWithMax = Template.bind({});
BadgeWithMax.args = {
  content: 1000,
  max: 999
};
BadgeWithMax.storyName = 'Badge with custom max value';

export const BadgeZero = Template.bind({});
BadgeZero.args = {
  content: 0
};
BadgeZero.storyName = 'Badge with 0';

export const ButtonWithBadge = args => (
  <Badge {...args}>
    <Button margin="0">Button with badge</Button>
  </Badge>
);
ButtonWithBadge.args = {
  content: 8,
  variant: 'danger'
};
ButtonWithBadge.storyName = 'Button With Badge';
