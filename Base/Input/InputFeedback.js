import { memo } from 'react';
import { TextFeedback } from './inputStyles';

const InputFeedback = ({ disabled, error, success, isLoading }) =>
  !disabled && !isLoading && (success || error) ? (
    <TextFeedback color={error ? 'danger' : success ? 'success' : null}>
      {error || success}
    </TextFeedback>
  ) : null;

export default memo(InputFeedback);
