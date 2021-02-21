import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Avatar from '../components/Base/Avatar/Avatar';
import Button from '../components/Base/Button/Button';
import InputFile from '../components/Base/Input/InputFile/InputFile';
import { UploadIcon } from '../components/Icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/InputFile',
  component: InputFile,
  argTypes: {
    name: {
      control: 'text',
      description:
        'Name for react hook form. Is required and unique (can not start with a number or use number as key name). Input name also supports dot and bracket syntax, which allows you to easily create nested form fields.',
      type: { summary: 'string', required: true }
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
    ref: {
      description: 'Reack hook form ref',
      type: { summary: 'ref' },
      control: { disable: true }
    }
  },
  args: {}
};

const Template = args => {
  const [file, setFile] = useState('');

  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = data => {
    data[args.name] = data[args.name][0];
    console.log(data, 'data');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: 'flex',
          gap: '1em',
          alignItems: 'center',
          margin: '3em 0',
          flexWrap: 'wrap'
        }}
      >
        <InputFile
          {...args}
          onChange={e => {
            setValue(args.name, e.target.files); // reack hook form value
            setFile(e.target.files[0]); // state value for the preview
          }}
          ref={register({ required: true })}
        >
          <Button type="button" IconLeft={UploadIcon}>
            Importar imagen
          </Button>
          {/* all inside the InputFile will open the file chooser when clicked */}
        </InputFile>

        <Avatar
          size="md"
          isEditable={false}
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fy7sKAqTLiD5YtPEY84Q9wtV8dDLmoBSeg&usqp=CAU'
          }
        />
      </div>
      <p style={{ color: 'red' }}>
        {errors?.file?.type === 'required' && 'Imagen requerida'}
      </p>
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export const DefaultInputFile = Template.bind({});
DefaultInputFile.args = {
  name: 'file',
  accept: 'images/*'
};
DefaultInputFile.storyName = 'Input File';
