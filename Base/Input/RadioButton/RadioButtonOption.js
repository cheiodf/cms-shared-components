import { forwardRef } from 'react';
import {
  RadioButtonItemContainer,
  RadioButtonInput,
  RadioButtonText
} from './radioButtonStyles';

const RadioButtonOption = forwardRef((props, ref) => {
  const {
    name,
    title,
    value,
    error,
    success,
    onChange,
    disabled,
    isLoading,
    inputValue,
    setInputValue
  } = props;

  const handleOnChange = e => {
    if (!disabled && !isLoading) {
      onChange && onChange(e);
      setInputValue(e.target.value);
    }
  };

  return (
    <RadioButtonItemContainer disabled={disabled || isLoading}>
      <RadioButtonInput
        type="radio"
        ref={ref}
        name={name}
        value={value}
        id={value + name}
        checked={inputValue === value}
        onChange={handleOnChange}
      />
      <RadioButtonText
        htmlFor={value + name}
        error={error}
        success={success}
        disabled={disabled || isLoading}
        title={title}
      >
        {title}
      </RadioButtonText>
    </RadioButtonItemContainer>
  );
});

RadioButtonOption.displayName = 'RadioButtonOption';
export default RadioButtonOption;
