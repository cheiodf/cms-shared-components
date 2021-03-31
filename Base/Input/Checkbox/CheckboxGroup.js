import { forwardRef, memo, useState } from 'react';
import CheckboxItem from './CheckboxItem';
import {
  CheckboxContainer,
  CheckboxTitle,
  CheckboxItemsContainer
} from './checkboxStyles';
import { props, defaultProps } from './checkboxProps';
import InputFeedback from '../InputFeedback';

const CheckboxGroup = forwardRef((props, ref) => {
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

  const handleSetValue = targetValue => {
    let newValue = [...value];
    if (value.includes(targetValue))
      newValue = newValue.filter(val => val !== targetValue);
    else newValue.push(targetValue);

    return setValue(newValue);
  };

  return (
    <CheckboxContainer
      margin={margin}
      disabled={disabled}
      isLoading={isLoading}
      size={size}
      htmlFor={name}
    >
      <CheckboxTitle>{placeholder}</CheckboxTitle>
      <CheckboxItemsContainer direction={direction}>
        {options?.map(option => {
          return (
            <CheckboxItem
              key={option.value}
              ref={ref}
              inputValue={value}
              setInputValue={handleSetValue}
              {...props}
              {...option}
            />
          );
        })}
      </CheckboxItemsContainer>
      <InputFeedback
        disabled={disabled}
        isLoading={isLoading}
        success={success}
        error={error}
      />
    </CheckboxContainer>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.propTypes = props;
CheckboxGroup.defaultProps = defaultProps;

export default memo(CheckboxGroup);
