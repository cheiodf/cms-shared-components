import { memo, useCallback } from 'react';
// components
import { Controller } from 'react-hook-form';
import SelectInput from './SelectInput';
// hooks
import useComponentVisible from '../../../../hooks/useComponentVisible';

// styles
import { InputContainer } from '../inputStyles';
// props
import { defaultProps, props } from './selectProps';

const Select = props => {
  const {
    defaultValue,
    control,
    name,
    rules,
    margin,
    isLoading,
    disabled
  } = props;

  const {
    ref: reference,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  const handleToggleOptions = useCallback(
    () => !disabled && !isLoading && setIsComponentVisible(!isComponentVisible),
    [isComponentVisible, disabled, isLoading]
  );

  return (
    <InputContainer ref={reference} margin={margin} {...props}>
      {control ? (
        <Controller
          as={
            <SelectInput
              {...props}
              toggleOptions={handleToggleOptions}
              isOpen={isComponentVisible}
              disabled={disabled || isLoading}
            />
          }
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={rules}
        />
      ) : (
        <SelectInput
          {...props}
          toggleOptions={handleToggleOptions}
          isOpen={isComponentVisible}
          disabled={disabled}
        />
      )}
    </InputContainer>
  );
};

Select.propTypes = props;
Select.defaultProps = defaultProps;

export default memo(Select);
