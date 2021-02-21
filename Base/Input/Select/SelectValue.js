import { memo } from 'react';
// styles
import {
  SelectTagContainer,
  SelectTagCross,
  SelectTagsContainer,
  SelectTagText,
  SelectText
} from './selectStyles';
// Icons
import { CrossIcon } from '../../../Icons';

const SelectValue = ({
  selectValue,
  placeholder,
  multiple,
  getValues,
  setValue,
  iconLeft,
  disabled
}) => {
  return !selectValue.length ? (
    <SelectText isPlaceholder={true} iconLeft={iconLeft}>
      {placeholder}
    </SelectText>
  ) : multiple ? (
    <SelectTagsContainer iconLeft={iconLeft}>
      {getValues().map(({ title, value }) => (
        <SelectTagContainer key={value} onClick={e => e.stopPropagation()}>
          <SelectTagText>{title}</SelectTagText>
          <SelectTagCross onClick={() => setValue(value)} disabled={disabled}>
            <CrossIcon width=".55em" color="var(--input-select-tag-color)" />
          </SelectTagCross>
        </SelectTagContainer>
      ))}
    </SelectTagsContainer>
  ) : (
    <SelectText iconLeft={iconLeft}>{getValues()[0].title}</SelectText>
  );
};

export default memo(SelectValue);
