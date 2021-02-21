import { useForm } from 'react-hook-form';
import Avatar from '../Base/Avatar/Avatar';
import Button from '../Base/Button/Button';
import defaultImage from '../../../public/static/images/defaultAvatar.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: 'text',
      description:
        'Name for react hook form. Is required (**if avatar component is editable**) and unique (can not start with a number or use number as key name). name also supports dot and bracket syntax, which allows you to easily create nested form fields.',
      type: { summary: 'string' }
    },
    accept: {
      control: 'text',
      description:
        'The accept attribute specifies a filter for what file types the user can pick from the file input dialog box.',
      type: { summary: 'string' }
    },
    onChange: {
      action: 'Click',
      control: { disable: true },
      description: 'onChange function',
      type: { summary: 'function' }
    },

    size: {
      control: {
        type: 'select',
        options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
      },
      description: 'Avatar size',
      type: { summary: 'xxs | xs | sm | md | lg | xl' },
      defaultValue: 'sm'
    },
    isEditable: {
      control: 'boolean',
      description: 'Avatar editable',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false }
      },
      defaultValue: false
    },
    src: {
      control: 'text',
      description: 'Image src',
      table: {
        type: { summary: 'string' }
      }
    },
    ref: {
      description: 'Reack hook form ref',
      type: { summary: 'ref' },
      control: { disable: true }
    }
  },
  args: {
    size: 'sm',
    isEditable: true
  }
};

const Template = args => {
  return <Avatar {...args} />;
};

export const AvatarNotEditable = Template.bind({});
AvatarNotEditable.args = {
  name: 'file',
  accept: 'image/*',
  src: defaultImage,
  size: 'md',
  isEditable: false
};
AvatarNotEditable.storyName = 'Avatar not editable';

export const AvatarEditable = Template.bind({});
AvatarEditable.args = {
  name: 'file2',
  accept: 'image/*',
  src: defaultImage,
  size: 'md',
  onChange: img => console.log('change image', img[0])
};
AvatarEditable.storyName = 'Avatar editable';

export const AvatarEditableRHF = ({ ...args }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    data.file3 = data.file3[0];
    console.log(data, 'data');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Avatar ref={register({ required: true })} {...args} />
      <p style={{ color: 'red' }}>
        {errors?.file3?.type === 'required' && 'Imagen requerida'}
      </p>
      <Button type="submit">Enviar</Button>
    </form>
  );
};

AvatarEditableRHF.args = {
  name: 'file3',
  accept: 'image/*',
  src: defaultImage,
  size: 'lg'
};

AvatarEditableRHF.storyName = 'Avatar editable with React Hook Form';
