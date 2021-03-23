import { tableData } from '../../../public/static/content/data';
import Table from '../Base/Table/Table';
import { UploadIcon } from '../../components/Icons';

const filterColumns = (...columns) => {
  const cols = [
    { key: 'name', title: 'Nombre' },
    { key: 'country', title: 'Pais' },
    { key: 'city', title: 'Ciudad' },
    { key: 'street', title: 'Calle' },
    { key: 'streetNumber', title: 'N° de calle' },
    { key: 'age', title: 'Edad' },
    {
      key: 'bornDate',
      title: 'Fecha de nacimiento',
      value: date => date?.toString().split('T')[0].replaceAll('-', '/')
    },
    { key: 'sex', title: 'Sexo' },
    { key: 'thumbnail', title: 'Thumbnail', type: 'image' },
    { key: 'images', title: 'Miembros', type: 'images' }
  ];

  return cols?.filter(col => columns.includes(col.key));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title of the table',
      type: { summary: 'string' }
    },
    data: {
      control: { type: 'object' },
      description: 'Table rows',
      type: {
        summary: 'array',
        detail: 'Array of objects, where each object is an item.',
        required: true
      }
    },
    columns: {
      control: { type: 'object' },
      description: 'Table columns',
      type: {
        summary: 'array',
        detail:
          'Array of objects. (key: string, title: string, value: function (item: any) => item, type: "text" | "image" | "images") Each object represent a column and object must have at least 2 keys: key and title. The title is the text to show and the key is the key that must match the key of the data prop object. The value key is a helper. It is used if we want the corresponding value to be shown in another way in the table. It is a function that has the item parameter, which is the value of the key, which we can manipulate to achieve the expected. (Ex: a field in date format that we want to display in another way). Type key is used to indicate what type is the value of the item in that column. The default value is text, if the value is "image" it has to be a url for an image to be displayed, if the value is "images", it has to be an array of strings which have to be image urls.',
        required: true
      }
    },
    page: {
      control: { type: 'number' },
      description: 'Actual page of the table',
      type: { summary: 'number' }
    },
    onChangePagination: {
      control: { type: 'function' },
      description: 'Function to change the page of the table',
      type: {
        summary: 'function',
        detail:
          'Function: (page: number) => page; It has the page parameter that will help us to know which page to change to when performing this function'
      }
    },
    totalPages: {
      control: { type: 'number' },
      description:
        'Total pages of the table. For the page to appear we will have to pass this property',
      type: { summary: 'number' }
    },
    options: {
      control: { type: 'object' },
      description:
        'Individual options of each item. As this parameter exists, the 3 points appear at the end of each row. On click opens a popover with the options',
      type: {
        summary: 'array',
        detail:
          'Array of objects. (title: string, onClick: function (item: object) => item; The title key is the text of the option. The onClick key is the function that is executed when the option is clicked. It has the item parameter which is the complete object of that row'
      }
    },
    globalActions: {
      control: { type: 'object' },
      description:
        'Global actions that are applied to multiple items in the table. As there is a global action, each row will have a checkbox to be selected. There will also be buttons in the table that allow executing a function, which have the parameters of the items that were selected',
      type: {
        summary: 'array',
        detail:
          'Array of objects. (title: string, onClick: function (items: array) => items, buttonProps: object) The title key is the text of the button. The onClick key is the function that is executed when the button is clicked. It has the items parameter which is an array of the items selected. ButtonProps key It is an object with the props to pass to the button'
      }
    },
    primaryKey: {
      control: { type: 'text' },
      description:
        'Primary and unique item key. If the primary key is not the default it must be changed',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_id' }
      }
    },
    avatar: {
      control: { type: 'text' },
      description:
        'Avatar image of the item. If we want an avatar image to be at the beginning of the row, we must specify which is the key of the item that is the image we want to show',
      type: { summary: 'string' }
    },
    path: {
      control: { type: 'text' },
      description: 'Route to redirect on click item',
      type: {
        summary: 'string',
        detail:
          'example: /route/:_id, if we want to put a field of the item in the route we specify it with ":" and then and the field that we want to go'
      }
    }
  },
  args: {
    columns: filterColumns(
      'name',
      'country',
      'city',
      'street',
      'streetNumber',
      'age'
    ),

    data: tableData
  }
};

const Template = args => <Table {...args}></Table>;

export const BasicTable = Template.bind({});
BasicTable.args = {};
BasicTable.storyName = 'BasicTable';

export const TableWithTitle = Template.bind({});
TableWithTitle.args = {
  title: 'Table title'
};
TableWithTitle.storyName = 'Table With Title';

export const TableWithAvatar = Template.bind({});
TableWithAvatar.args = {
  avatar: 'avatar',
  title: 'Table with avatar'
};
TableWithAvatar.storyName = 'Table With Avatar';

export const TableWithCheckboxs = Template.bind({});
TableWithCheckboxs.args = {
  title: 'Table with global actions',
  globalActions: [
    {
      title: 'Ver items seleccionados',
      onClick: selectedData => console.log('selectedData', selectedData),
      buttonProps: {
        // IconLeft: UploadIcon
      }
    },
    {
      title: 'Button',
      onClick: selectedData => console.log('Button', selectedData),
      buttonProps: {
        // IconLeft: UploadIcon,
        variant: 'danger'
      }
    }
  ]
};
TableWithCheckboxs.storyName = 'Table With Checkboxs';

export const TableWithPagination = Template.bind({});
TableWithPagination.args = {
  title: 'Table with pagination',
  page: 2,
  totalPages: 10,
  onChangePagination: page => console.log(page)
};
TableWithPagination.storyName = 'Table With Pagination';

export const TableWithOptions = Template.bind({});
TableWithOptions.args = {
  title: 'Table with options',
  options: [
    {
      title: 'Dar de baja',
      onClick: item => alert('dar de baja ' + item._id)
    },
    {
      title: 'Eliminar',
      onClick: item => alert('delete ' + item._id)
    },
    {
      title: 'Eliminar',
      onClick: item => alert('delete ' + item._id)
    },
    {
      title: 'Eliminar',
      onClick: item => alert('delete ' + item._id)
    }
  ]
};
TableWithOptions.storyName = 'Table With Options';

export const TableWithImages = Template.bind({});
TableWithImages.args = {
  title: 'Table with images',
  columns: filterColumns('name', 'country', 'age', 'sex', 'thumbnail', 'images')
};
TableWithImages.storyName = 'Table With Images in a column';

export const TableWithDate = Template.bind({});
TableWithDate.args = {
  title: 'Table with a date column',
  columns: filterColumns('name', 'country', 'age', 'sex', 'bornDate')
};
TableWithDate.storyName = 'Table With Date';

export const TableComplete = Template.bind({});
TableComplete.args = {
  title: 'Table Complete',
  avatar: 'avatar',

  columns: filterColumns(
    'name',
    'country',
    'city',
    'street',
    'streetNumber',
    'age',
    'bornDate',
    'sex',
    'thumbnail',
    'images'
  ),
  options: [
    {
      title: 'Dar de baja',
      onClick: item => alert('dar de baja ' + item._id)
    },
    {
      title: 'Eliminar',
      onClick: item => alert('delete ' + item._id)
    },
    {
      title: 'Eliminar',
      onClick: item => alert('delete ' + item._id)
    },
    {
      title: 'Eliminar',
      onClick: item => alert('delete ' + item._id)
    }
  ],
  globalActions: [
    {
      title: 'Ver items seleccionados',
      onClick: selectedData => console.log('selectedData', selectedData),
      buttonProps: {
        IconLeft: UploadIcon
      }
    },
    {
      title: 'Button',
      onClick: selectedData => console.log('Button', selectedData),
      buttonProps: {
        IconLeft: UploadIcon,
        variant: 'danger'
      }
    }
  ],
  page: 2,
  totalPages: 10,
  onChangePagination: page => console.log(page)
};
TableComplete.storyName = 'Table Complete';
