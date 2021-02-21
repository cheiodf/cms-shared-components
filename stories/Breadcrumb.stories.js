import Breadcrumb from '../Base/Breadcrumb/Breadcrumb';
import { wrapper } from '../../store';
import { EditIcon } from '../../components/Icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    home: {
      control: 'text',
      description: 'Home Path',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/dashboard' }
      }
    },
    links: {
      control: 'object',
      description: 'Navigation route links with their payhs',
      table: {
        type: {
          summary: 'array',
          detail:
            'Array of objects ([{title: string, path: string, icon: element}]). title: text to display. path: route that it should lead to. icon (not mandatory): icon that appears next to the title'
        },
        defaultValue: { summary: [] }
      }
    }
  },
  args: {
    home: '/',
    links: [
      { title: 'Usuarios', path: '/users' },
      { title: 'Agregar usuario', path: '/users/add' }
    ]
  }
};

const Template = wrapper.withRedux(args => {
  return <Breadcrumb {...args}></Breadcrumb>;
});

// const Template = args =>
//   wrapper.withRedux(() => {
//     return <Breadcrumb {...args}></Breadcrumb>;
//   });

export const DefaultBreadcrumb = Template.bind({});
DefaultBreadcrumb.args = {};
DefaultBreadcrumb.storyName = 'Breadcrumb';

export const BreadcrumbWithIcons = Template.bind({});
BreadcrumbWithIcons.args = {
  links: [
    { title: 'Users', path: '/users', icon: EditIcon },
    { title: 'John Doe', path: '/users/john-doe', icon: EditIcon },
    { title: 'Edit', path: '/users/john-doe/edit', icon: EditIcon }
  ]
};
BreadcrumbWithIcons.storyName = 'Breadcrumb With Icons';
