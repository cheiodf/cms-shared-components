export default {
  name: {
    control: 'text',
    description:
      'Name for react hook form. Is required and unique (can not start with a number or use number as key name). Input name also supports dot and bracket syntax, which allows you to easily create nested form fields.',
    type: { summary: 'string', required: true }
  },
  placeholder: {
    control: 'text',
    description: 'Input placeholder',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Placeholder' }
    },
    defaultValue: 'Placeholder'
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    description: 'Input size',
    type: { summary: 'xs | sm | md | lg | xl' },
    defaultValue: 'md'
  },

  disabled: {
    control: 'boolean',
    description: 'Disabled input. Use it when there is not ref',
    defaultValue: false,
    table: {
      type: { summary: 'bool' },
      defaultValue: { summary: false }
    }
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
      defaultValue: { summary: '1.2em 0 2.5em' }
    },
    defaultValue: '1.2em 0 2.5em'
  },
  error: {
    control: 'text',
    description: 'Error text of input',
    type: { summary: 'string' }
  },
  success: {
    control: 'text',
    description: 'Text success',
    type: { summary: 'string' }
  },
  onChange: {
    action: 'Click',
    control: { disable: true },
    description: 'onChange function',
    type: { summary: 'function' }
  },
  defaultValue: {
    control: { disable: true },
    description: 'Default Value',
    type: { summary: 'string | array of objects' },
    defaultValue: ''
  }
};
