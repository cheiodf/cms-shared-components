import React from 'react';
import Button from '../components/Base/Button/Button';
import { wrapper } from '../store.js';
import useSnackbar from '../hooks/useSnackbar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Snackbar',
  component: <p></p>,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'danger', 'warning', 'success'],
        description: 'Snackbar Variant',
        table: {
          type: { summary: 'info | danger | warning | success' },
          defaultValue: { summary: 'info' }
        }
      }
    },
    content: {
      control: 'text',
      description: 'Snackbar Content',
      table: {
        type: { summary: 'string' }
      }
    },
    action: {
      control: 'object',
      description: 'Snackbar action button',
      table: {
        type: {
          summary: 'object',
          detail: '{title: string, href: string, external: bool, onClick: func}'
        }
      }
    }
  },
  args: {}
};

const Template = wrapper.withRedux(args => {
  const { openSnackbar } = useSnackbar();

  const handleOpenSnackbar = () => {
    openSnackbar({
      ...args
    });
  };

  return (
    <Button onClick={handleOpenSnackbar} variant={args.variant}>
      Open {args.variant} snackbar
    </Button>
  );
});

export const SnackbarInfo = Template.bind({});
SnackbarInfo.args = {
  variant: 'info',
  content: 'Snackbar info'
};
SnackbarInfo.storyName = 'Snackbar Info';

export const SnackbarSuccess = Template.bind({});
SnackbarSuccess.args = {
  variant: 'success',
  content: 'Snackbar Success'
};
SnackbarSuccess.storyName = 'Snackbar Success';

export const SnackbarDanger = Template.bind({});
SnackbarDanger.args = {
  variant: 'danger',
  content: 'Snackbar Danger'
};
SnackbarDanger.storyName = 'Snackbar Danger';

export const SnackbarWarning = Template.bind({});
SnackbarWarning.args = {
  variant: 'warning',
  content: 'Snackbar Warning'
};
SnackbarWarning.storyName = 'Snackbar Warning';

export const SnackbarWithHref = Template.bind({});
SnackbarWithHref.args = {
  variant: 'info',
  content: 'Snackbar Info',
  action: { title: 'See', href: 'https://google.com', external: true }
};
SnackbarWithHref.storyName = 'Snackbar With Href';

export const SnackbarWithOnClick = Template.bind({});
SnackbarWithOnClick.args = {
  variant: 'success',
  content: 'Snackbar Success',
  action: { title: 'Undo', onClick: () => console.log('action') }
};
SnackbarWithOnClick.storyName = 'Snackbar With onClick';
