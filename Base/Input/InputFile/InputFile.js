import { forwardRef, memo } from 'react';
import { props, defaultProps } from './inputFileProps';
import { InputFileContainer, InputFileContainerLabel } from './inputFileStyles';

const InputFile = forwardRef((props, ref) => {
  const { children, name } = props;
  const inputFileProps = { ...props };
  inputFileProps.children = null;

  return (
    <InputFileContainer>
      {children}
      <InputFileContainerLabel htmlFor={name} />
      <input hidden type="file" ref={ref} id={name} {...inputFileProps} />
    </InputFileContainer>
  );
});

InputFile.displayName = 'InputFile';
InputFile.propTypes = props;
InputFile.defaultProps = defaultProps;

export default memo(InputFile);
