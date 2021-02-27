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
import { CrossIcon } from '../../../../components/Icons';

const SelectValue = ({
  selectValue,
  placeholder,
  multiple,
  getValues,
  setValue,
  iconLeft,
  disabled
}) => {
  console.log(
    'here',
    typeof selectValue === 'number' ? false : !selectValue.length,
    selectValue
  );

  if (typeof selectValue === 'number' ? false : !selectValue.length) {
    return (
      <SelectText isPlaceholder={true} iconLeft={iconLeft}>
        {placeholder}
      </SelectText>
    );
  } else {
    return multiple ? (
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
      <SelectText iconLeft={iconLeft}>{getValues()[0]?.title}</SelectText>
    );
  }
};

export default memo(SelectValue);
