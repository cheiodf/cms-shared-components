import React from 'react';
import Typography from '../components/Base/Typography/Typography';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UiKit/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: 'text',
      description: 'Component children',
      table: {
        type: { summary: 'element' }
      }
    },
    tag: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a']
      },
      description: 'HTML tag of the component',
      table: {
        type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6 | p | span | a' },
        defaultValue: { summary: 'p' }
      }
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'justify']
      },
      description: 'Text align',
      table: {
        type: { summary: 'left | center | right | justify' }
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'default',
          'inverted',
          'primary',
          'accent',
          'danger',
          'warning',
          'info',
          'info-variant',
          'success',
          'dark',
          'light',
          'white',
          'black',
          'gray'
        ]
      },
      description: 'Text color',
      table: {
        type: {
          summary:
            'default | inverted | primary | accent | danger | warning | info | info-variant | success | dark | light | white | black | gray'
        },
        defaultValue: { summary: 'default' }
      }
    },

    margin: {
      control: 'text',
      description: 'Text margin',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary:
            'tag: h1, h2, h3, h4, h5, h6 => "0 0 .35em 0"; tag: p, span, a => 0;'
        }
      }
    },
    padding: {
      control: 'text',
      description: 'Text padding',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 0
        }
      }
    },
    lineHeight: {
      control: 'text',
      description: 'Text line height',
      table: {
        type: { summary: 'string | number' },
        defaultValue: {
          summary: 1.4
        }
      }
    },
    wordWrap: {
      control: 'boolean',
      description:
        'Text word break property. To prevent overflow, word may be broken at arbitrary points',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: true }
      }
    },
    maxLines: {
      control: 'number',
      description:
        'Maximum lines of text, if the text exceeds those lines, it will be cut off and the three dots will appear (...). If the value is 0 the text will never be cutted',
      table: {
        type: { summary: 'number' }
      }
    },
    onClick: {
      action: 'Click',
      description:
        'onClick function. if this prop exists the text will have a cursor pointer',
      table: {
        type: { summary: 'function' }
      },
      control: { disable: true },
      defaultValue: null
    },
    disabled: {
      control: 'boolean',
      description: 'Text disabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    inline: {
      control: 'boolean',
      description:
        'Text display property. If is true, the text will have a display inline, else will have a display block ',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    italic: {
      control: 'boolean',
      description: 'Text italic',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    uppercase: {
      control: 'boolean',
      description: 'Text uppercase',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    lowercase: {
      control: 'boolean',
      description: 'Text lowercase',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    capitalize: {
      control: 'boolean',
      description: 'Text capitalize',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      }
    },
    weight: {
      control: {
        type: 'select',
        options: ['light', 'regular', 'semi-bold', 'bold', 'extra-bold']
      },
      description: 'Text weight',
      table: {
        type: { summary: 'light | regular | semi-bold | bold | extra-bold' },
        defaultValue: {
          summary:
            'tag: h1, h2, h3, h4, h5, h6 => "bold"; tag: p, span, a => "regular";'
        }
      }
    },
    size: {
      control: 'number',
      description: 'Text font size. the measure is in "em"',
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary:
            'tag: h1 => 2; tag: h2 => 1.625; tag: h3 => 1.25; tag: h4 => 1; tag: h5 => 0.85; tag: h6 => 0.75; tag: p => 1; tag: a => 1; tag: span => 0.85; '
        }
      }
    },
    decoration: {
      control: {
        type: 'select',
        options: ['line-through', 'underline', 'overline']
      },
      description: 'Text decoration',
      table: {
        type: { summary: 'line-through | underline | overline' }
      }
    },
    onHover: {
      control: 'object',
      description: 'On hover text action',
      table: {
        type: {
          summary: 'object',
          detail:
            'The possible keys are the same as all the props mentioned above, except "onClick", "children" and "tag"'
        },
        defaultValue: { summary: '{}' }
      }
    }
  },
  args: {
    children: 'Typography text',
    tag: 'p',
    lineHeight: 1.4,
    onHover: {}
  }
};

const Template = args => <Typography {...args} />;

export const DefaultTypography = Template.bind({});
DefaultTypography.args = {};
DefaultTypography.storyName = 'Default Typography';

export const TypographyCustomColor = Template.bind({});
TypographyCustomColor.args = {
  color: 'primary'
};
TypographyCustomColor.storyName = ' Typography Custom Color';

export const TypographyCustomAlign = Template.bind({});
TypographyCustomAlign.args = {
  align: 'center'
};
TypographyCustomAlign.storyName = ' Typography Custom Align';

export const TypographyMaxLines = Template.bind({});
TypographyMaxLines.args = {
  maxLines: 2,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
};
TypographyMaxLines.storyName = ' Typography With Max Lines';

export const TypographyDisabled = Template.bind({});
TypographyDisabled.args = {
  disabled: true
};
TypographyDisabled.storyName = ' Typography Disabled';

export const TypographyCustomizedStyle = Template.bind({});
TypographyCustomizedStyle.args = {
  italic: true,
  weight: 'bold',
  size: 2,
  uppercase: true,
  decoration: 'underline'
};
TypographyCustomizedStyle.storyName = ' Typography Customized Style';

export const TypographyOnHover = Template.bind({});
TypographyOnHover.args = {
  inline: true,
  onClick: () => alert('delete'),
  onHover: {
    decoration: 'line-through',
    color: 'danger'
  }
};
TypographyOnHover.storyName = ' Typography On Hover';

export const TypographyOnHoverTwo = Template.bind({});
TypographyOnHoverTwo.args = {
  inline: true,
  onHover: {
    italic: true,
    weight: 'bold',
    size: 2,
    uppercase: true,
    decoration: 'underline'
  }
};
TypographyOnHoverTwo.storyName = ' Typography On Hover 2';

export const TypographyOnHoverThree = Template.bind({});
TypographyOnHoverThree.args = {
  inline: true,
  maxLines: 2,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  onHover: {
    maxLines: 0
  }
};
TypographyOnHoverThree.storyName = ' Typography On Hover 3';
