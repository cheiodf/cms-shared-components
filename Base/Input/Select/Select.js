import { memo, useCallback, useEffect } from 'react';
// components
import { Controller } from 'react-hook-form';
import SelectInput from './SelectInput';
// hooks
import useComponentVisible from '../../../../cms-shared-components/hooks/useComponentVisible';

// styles
import { InputContainer } from '../inputStyles';
// props
import { defaultProps, props } from './selectProps';

const Select = props => {
  const {
    control,
    name,
    rules,
    margin,
    isLoading,
    disabled,
    getValues
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

  const getVal = (getValues && getValues(name)) || null;

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
          rules={rules}
          defaultValue={getVal}
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
