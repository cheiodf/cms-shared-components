import { forwardRef, memo } from 'react';
import InputFeedback from '../InputFeedback';
import InputIcons from '../InputIcons';
import { InputContainer } from '../inputStyles';
import { props, defaultProps } from './textareaProps';
import { TextareaInput } from './textareaStyles';

const Textarea = forwardRef((props, ref) => {
  const {
    variant,
    success,
    error,
    IconLeft,
    IconRight,
    margin,
    disabled,
    isLoading,
    size
  } = props;

  const inputVariant =
    !disabled && !isLoading
      ? error
        ? 'danger'
        : success
        ? 'success'
        : variant
      : variant;

  return (
    <InputContainer
      margin={margin}
      disabled={disabled}
      isLoading={isLoading}
      size={size}
    >
      <InputIcons IconLeft={IconLeft} IconRight={IconRight} type="textarea" />
      <TextareaInput
        {...props}
        variant={inputVariant}
        ref={ref}
      ></TextareaInput>
      <InputFeedback
        disabled={disabled}
        isLoading={isLoading}
        success={success}
        error={error}
      />
    </InputContainer>
  );
});

Textarea.displayName = 'Textarea';
Textarea.propTypes = props;
Textarea.defaultProps = defaultProps;

export default memo(Textarea);
