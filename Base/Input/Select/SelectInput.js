import { useState, useCallback, memo, forwardRef, useEffect } from 'react';
import InputFeedback from '../InputFeedback';
import InputIcons from '../InputIcons';
import SelectOptions from './SelectOptions';
import { SelectContainer } from './selectStyles';
import SelectValue from './SelectValue';

const SelectInput = forwardRef((props, _) => {
  const {
    toggleOptions,
    defaultValue,
    multiple,
    isOpen,
    IconLeft,
    options,
    placeholder,
    disabled,
    error,
    success,
    setValue,
    variant,
    name,
    size,
    rules,
    hasCross,
    hasSearch,
    atChangeValue,
    getValues,
    control
  } = props;

  const emptyValue = multiple ? [] : '';
  const [selectValue, setSelectValue] = useState(emptyValue);

  const getVal = (getValues && getValues(name)) || null;

  useEffect(() => {
    const val =
      control && getValues
        ? getVal
        : typeof defaultValue === 'number'
        ? defaultValue
        : defaultValue.length
        ? defaultValue
        : emptyValue;

    setSelectValue(val || emptyValue);
  }, [defaultValue, setSelectValue, getValues, control, name, getVal]);

  const handleIsSelected = useCallback(
    value => {
      if (multiple) return selectValue.includes(value);
      else return selectValue === value;
    },
    [selectValue, multiple]
  );

  const handleSetValue = useCallback(
    value => {
      if (!disabled) {
        const isSelected = handleIsSelected(value);

        const newValue = multiple
          ? isSelected
            ? selectValue.filter(item => item !== value)
            : [...selectValue, value]
          : value;

        setSelectValue(newValue);
        atChangeValue && atChangeValue(newValue);
        setValue &&
          setValue(name, !newValue.length && rules.required ? '' : newValue);
      }
    },
    [
      handleIsSelected,
      multiple,
      selectValue,
      setSelectValue,
      setValue,
      rules,
      atChangeValue
    ]
  );

  const handleGetValues = useCallback(() => {
    const opt = options
      .filter(({ value }) => handleIsSelected(value))
      .sort(
        (a, b) => selectValue.indexOf(a.value) - selectValue.indexOf(b.value)
      );
    return opt;
  }, [options, handleIsSelected, selectValue]);

  const handleClearSelect = useCallback(() => {
    setSelectValue(multiple ? [] : '');
  });

  const inputVariant = !disabled
    ? error
      ? 'danger'
      : success
      ? 'success'
      : variant
    : variant;

  const isSelectOpen = isOpen && !disabled;

  return (
    <SelectContainer
      onClick={toggleOptions}
      IconLeft={!!IconLeft}
      IconRight={true}
      variant={inputVariant}
      isOpen={isSelectOpen}
    >
      <InputIcons
        IconLeft={IconLeft}
        type="select"
        isOpen={isSelectOpen}
        disabled={disabled}
        hasCross={!!(hasCross && selectValue.length)}
        onClickCross={handleClearSelect}
      />
      <SelectValue
        multiple={multiple}
        placeholder={placeholder}
        selectValue={selectValue}
        getValues={handleGetValues}
        setValue={handleSetValue}
        iconLeft={!!IconLeft}
        disabled={disabled}
      />

      {isSelectOpen && (
        <SelectOptions
          options={options}
          isSelected={handleIsSelected}
          setValue={handleSetValue}
          multiple={multiple}
          toggleOptions={toggleOptions}
          size={size}
          hasSearch={hasSearch}
          name={name}
        />
      )}

      <InputFeedback disabled={disabled} success={success} error={error} />
    </SelectContainer>
  );
});

SelectInput.displayName = 'SelectInput';
export default memo(SelectInput);
