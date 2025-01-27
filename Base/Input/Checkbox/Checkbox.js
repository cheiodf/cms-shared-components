import { forwardRef } from 'react';
import {
  CheckboxItemContainer,
  CheckboxInput,
  CheckboxIcon,
  CheckboxText
} from './checkboxStyles';
import { CheckIcon } from '../../../../components/Icons';

const Checkbox = forwardRef((props, ref) => {
  const { disabled, title, titleProps, id, size } = props;

  return (
    <CheckboxItemContainer disabled={disabled} size={size}>
      <CheckboxInput type="checkbox" ref={ref} {...props} />

      <CheckboxText
        {...titleProps}
        htmlFor={id}
        title={title}
        disabled={disabled}
      >
        {title}
        <CheckboxIcon>
          <CheckIcon color="var(--input-checkbox-check-color)" width="100%" />
        </CheckboxIcon>
      </CheckboxText>
    </CheckboxItemContainer>
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
