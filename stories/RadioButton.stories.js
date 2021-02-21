import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Base/Button/Button';
import RadioButton from '../components/Base/Input/RadioButton/RadioButton';
import Textbox from '../components/Base/Input/Textbox/Textbox';
import inputArgs from './assets/args/inputArgs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input/Radio Button',
  component: RadioButton,
  argTypes: {
    ...inputArgs,
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column']
      },
      description: 'Radio button direction',
      defaultValue: 'column',
      table: {
        type: { summary: 'row | column' },
        defaultValue: { summary: 'column' }
      }
    },

    options: {
      control: { disable: true },
      description: 'Radio button options',
      type: {
        summary: 'array',
        detail:
          'Array of objects, where each object has to have two keys: value and title, both are strings',
        required: true
      }
    }
  },
  args: {
    options: [
      { value: 'itemId', title: 'Item One' },
      { value: 'itemId2', title: 'Item Two' },
      { value: 'itemId3', title: 'Item Three' },
      { value: 'itemId4', title: 'Item Four' },
      { value: 'itemId5', title: 'Item Five' }
    ],
    name: 'radioButton',
    placeholder: 'Radio Button Title'
  }
  // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => <RadioButton {...args} />;

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {};
DefaultRadioButton.storyName = 'Radio Button';

export const RadioButtonRow = Template.bind({});
RadioButtonRow.args = {
  direction: 'row',
  name: 'rb2'
};
RadioButtonRow.storyName = 'Radio Button Row';

export const RadioButtonError = Template.bind({});
RadioButtonError.args = {
  error: 'Error text',
  name: 'rb3'
};
RadioButtonError.storyName = 'Radio Button Error';

export const RadioButtonSuccess = Template.bind({});
RadioButtonSuccess.args = {
  success: 'Success text',
  name: 'rb4'
};
RadioButtonSuccess.storyName = 'Radio Button Success';

export const RadioButtonDisabled = Template.bind({});
RadioButtonDisabled.args = {
  disabled: true,
  name: 'rb5'
};
RadioButtonDisabled.storyName = 'Radio Button Disabled';

export const RadioButtonDefaultValue = Template.bind({});
RadioButtonDefaultValue.args = {
  defaultValue: 'itemId2',
  name: 'rb6'
};
RadioButtonDefaultValue.storyName = 'Radio Button with Default Value';

export const RadioButtonWithInput = () => {
  const defaultValue = ''; // get default value
  const { handleSubmit, errors, register, setValue } = useForm({
    defaultValues: { textbox: defaultValue }
  });
  const [isRbVisible, setIsRbVisible] = useState(!!defaultValue);

  const onSubmit = data => {
    console.log(data, 'data');
  };

  if (Object.keys(errors).length) console.log(errors, 'errors');

  const handleOnChange = () => {
    setIsRbVisible(!isRbVisible); // set is input visible
    setValue('textbox', '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="form">
      <RadioButton
        name="rd7"
        placeholder="Antecedentes penales"
        options={[
          { value: 'yes', title: 'Si' },
          { value: 'no', title: 'No' }
        ]}
        direction="row"
        defaultValue={defaultValue ? 'yes' : 'no'}
        onChange={handleOnChange}
      />
      <div style={{ display: !isRbVisible && 'none' }}>
        <Textbox
          name="textbox"
          ref={register({ required: isRbVisible })}
          placeholder="Antecedentes penales"
          error={errors?.textbox?.type === 'required' ? 'Campo requerido' : ''}
        />
      </div>
      <Button type="submit">Send data</Button>
    </form>
  );
};
RadioButtonWithInput.storyName = 'Radio Button with Input';

export const MultipleRadioButtonWithInput = () => {
  const defaultValue = { option: 'one', textbox: 'text' }; // get default value

  const handleIsVisible = value => {
    return value === 'one' || value === 'three' || value === 'five';
  };

  const { handleSubmit, errors, register, setValue } = useForm({
    defaultValues: { rd8: defaultValue }
  });
  const [isRbVisible, setIsRbVisible] = useState(
    handleIsVisible(defaultValue?.option)
  );

  const onSubmit = data => {
    console.log(data, 'data');
  };

  if (Object.keys(errors).length) console.log(errors, 'errors');

  const handleOnChange = e => {
    const isVisble = handleIsVisible(e.target.value);
    setIsRbVisible(isVisble); // set is input visible
    !isVisble && setValue('rd8.textbox', '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="form">
      <RadioButton
        name="rd8.option"
        placeholder="Antecedentes penales (opciones con input: 1, 3, 5)"
        options={[
          { value: 'one', title: 'Option 1' },
          { value: 'two', title: 'Option 2' },
          { value: 'three', title: 'Option 3' },
          { value: 'four', title: 'Option 4' },
          { value: 'five', title: 'Option 5' },
          { value: 'six', title: 'Option 6' }
        ]}
        direction="row"
        defaultValue={defaultValue?.option}
        onChange={handleOnChange}
        ref={register({ required: true })}
        error={
          errors?.rd8?.option?.type === 'required' ? 'Campo requerido' : ''
        }
      />
      <div style={{ display: !isRbVisible && 'none' }}>
        <Textbox
          name="rd8.textbox"
          ref={register({ required: isRbVisible })}
          placeholder="Antecedentes penales"
          defaultValue={defaultValue?.textbox}
          error={
            errors?.rd8?.textbox?.type === 'required' ? 'Campo requerido' : ''
          }
        />
      </div>
      <Button type="submit">Send data</Button>
    </form>
  );
};
MultipleRadioButtonWithInput.storyName = 'Multiple Radio Button with Input';
