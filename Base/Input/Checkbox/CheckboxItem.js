import { forwardRef } from 'react';
import Checkbox from './Checkbox';

const CheckboxItem = forwardRef((props, ref) => {
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
    setInputValue,
    checked
  } = props;

  const handleOnChange = e => {
    if (!disabled && !isLoading) {
      onChange && onChange(e);
      setInputValue(e.target.value);
    }
  };

  return (
    <Checkbox
      ref={ref}
      name={name}
      value={value}
      id={value + name}
      checked={checked || inputValue?.includes(value)}
      onChange={handleOnChange}
      disabled={disabled || isLoading}
      title={title}
      titleProps={{
        error,
        success,
        disabled: disabled || isLoading
      }}
    />
  );
});

CheckboxItem.displayName = 'CheckboxItem';
export default CheckboxItem;
