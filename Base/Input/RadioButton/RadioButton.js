import { forwardRef, memo, useState } from 'react';
import RadioButtonOption from './RadioButtonOption';
import {
  RadioButtonContainer,
  RadioButtonTitle,
  RadioButtonItemsContainer
} from './radioButtonStyles';
import { props, defaultProps } from './radioButtonProps';
import InputFeedback from '../InputFeedback';

const RadioButton = forwardRef((props, ref) => {
  const {
    placeholder,
    options,
    margin,
    disabled,
    isLoading,
    size,
    direction,
    success,
    error,
    defaultValue,
    name
  } = props;

  const [value, setValue] = useState(defaultValue);

  return (
    <RadioButtonContainer
      margin={margin}
      disabled={disabled}
      isLoading={isLoading}
      size={size}
      htmlFor={name}
    >
      <RadioButtonTitle>{placeholder}</RadioButtonTitle>
      <RadioButtonItemsContainer direction={direction}>
        {options?.map(option => {
          return (
            <RadioButtonOption
              key={option.value}
              ref={ref}
              inputValue={value}
              setInputValue={setValue}
              {...props}
              {...option}
            />
          );
        })}
      </RadioButtonItemsContainer>
      <InputFeedback
        disabled={disabled}
        isLoading={isLoading}
        success={success}
        error={error}
      />
    </RadioButtonContainer>
  );
});

RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = props;
RadioButton.defaultProps = defaultProps;

export default memo(RadioButton);
