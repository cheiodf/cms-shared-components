import React from 'react';
import Paper from '../components/Base/Paper/Paper';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Paper',
  component: Paper,
  argTypes: {
    children: {
      control: { disable: true },
      description: 'Component ',
      table: {
        type: { summary: 'element' }
      }
    },
    elevation: {
      control: {
        type: 'number'
      },
      description: 'Shadow elevation',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 }
      },
      defaultValue: 3
    },
    radius: {
      control: {
        type: 'number'
      },
      description: 'Paper elevation',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 }
      },
      defaultValue: 5
    },
    shadowX: {
      control: {
        type: 'select',
        options: ['left', 'right']
      },
      description: 'Shadow X position',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' }
      },
      defaultValue: 'right'
    },
    shadowY: {
      control: {
        type: 'select',
        options: ['top', 'bottom']
      },
      description: 'Shadow Y position',
      table: {
        type: { summary: 'top | bottom' },
        defaultValue: { summary: 'bottom' }
      },
      defaultValue: 'bottom'
    },
    outline: {
      control: 'boolean',
      description: 'Paper outline (with border and without box-shadow)',
      defaultValue: false,
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    padding: {
      control: 'text',
      description: 'Paper padding',
      table: {
        type: { summary: 'string | 0' },
        defaultValue: { summary: 0 }
      }
    },
    bg: {
      control: 'color',
      description: 'Paper bg color',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {}
};

const Template = args => {
  return (
    <div style={{ height: 200, width: 200 }} /* container */>
      <Paper {...args}>
        <p>Paper</p>
      </Paper>
    </div>
  );
};

export const DefaultPaper = Template.bind({});
DefaultPaper.args = {};
DefaultPaper.storyName = 'Default Paper';

export const PaperOutline = Template.bind({});
PaperOutline.args = {
  outline: true
};
PaperOutline.storyName = 'Paper outline';

export const CustomPaper = Template.bind({});
CustomPaper.args = {
  radius: 10,
  elevation: 10
};
CustomPaper.storyName = 'Custom Paper';
