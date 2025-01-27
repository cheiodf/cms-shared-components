import { useState, forwardRef, memo, useEffect } from 'react';
import InputFeedback from '../InputFeedback';
import InputIcons from '../InputIcons';
import { InputContainer } from '../inputStyles';
import { props, defaultProps } from './textboxProps';
import { Input } from './textboxStyles';

const Textbox = forwardRef((props, ref) => {
  const {
    variant,
    success,
    error,
    IconLeft,
    IconRight,
    margin,
    disabled,
    isLoading,
    size,
    type,
    hasCross,
    onChange,
    defaultValue,
    setValue,
    name,
    getValues
  } = props;
  const [inputType, setInputType] = useState(type);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(
      ref ? (getValues ? getValues(name) : '') : defaultValue || ''
    );
  }, [ref, getValues, name, defaultValue]);

  const inputVariant =
    !disabled && !isLoading
      ? error
        ? 'danger'
        : success
        ? 'success'
        : variant
      : variant;

  const handleChangeInputType = () => {
    if (type === 'password') {
      setInputType(inputType === 'password' ? 'text' : 'password');
    }
  };

  const handleClearInput = () => {
    if (inputValue) {
      setInputValue('');
      if (setValue) setValue(name, '');
    }
  };

  const handleOnChange = e => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <InputContainer
      margin={margin}
      disabled={disabled}
      isLoading={isLoading}
      size={size}
      name={name}
    >
      <InputIcons
        IconLeft={IconLeft}
        IconRight={IconRight}
        type={type}
        hasCross={hasCross && inputValue}
        onClickCross={handleClearInput}
        changeInputType={handleChangeInputType}
        inputType={inputType}
      />

      <Input
        {...props}
        variant={inputVariant}
        ref={ref}
        type={inputType}
        onChange={handleOnChange}
        hasPlaceholder={inputValue} // for date inputs
        value={ref ? undefined : inputValue}
        defaultValue={undefined}
      />
      <InputFeedback
        disabled={disabled}
        isLoading={isLoading}
        success={success}
        error={error}
      />
    </InputContainer>
  );
});

Textbox.displayName = 'Textbox';
Textbox.propTypes = props;
Textbox.defaultProps = defaultProps;

export default memo(Textbox);
