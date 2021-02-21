import { memo } from 'react';
// styles
import { CrossIconContainer, IconContainer } from './inputStyles';
import { SelectArrowContainer } from './Select/selectStyles';
// Icons
import {
  ArrowDownIcon,
  EyeIcon,
  EyeCrossedIcon,
  CrossCircleOutlineIcon
} from '../../Icons';

const InputIcons = ({
  IconLeft,
  IconRight,
  type = '',
  isOpen,
  disabled,
  hasCross,
  inputType,
  changeInputType,
  onClickCross
}) => {
  const handleOnClickCross = e => {
    onClickCross && onClickCross();
    e.stopPropagation();
  };
  return (
    <>
      {IconLeft && (
        <IconContainer position="left" type={type}>
          <IconLeft width="1em" color="var(--input-icon)" />
        </IconContainer>
      )}
      {type === 'select' ? (
        <IconContainer position="right" type={type}>
          <SelectArrowContainer isOpen={isOpen} disabled={disabled}>
            <ArrowDownIcon width="1em" color="var(--input-icon)" />
          </SelectArrowContainer>
        </IconContainer>
      ) : type === 'password' ? (
        <IconContainer
          position="right"
          type={type}
          onClick={changeInputType}
          pointer
        >
          {inputType === 'password' ? (
            <EyeIcon width="1em" color="var(--input-icon)" />
          ) : (
            <EyeCrossedIcon width="1em" color="var(--input-icon)" />
          )}
        </IconContainer>
      ) : (
        IconRight && (
          <IconContainer position="right" type={type}>
            <IconRight width="1em" color="var(--input-icon)" />
          </IconContainer>
        )
      )}

      {hasCross && (
        <CrossIconContainer onClick={handleOnClickCross}>
          <CrossCircleOutlineIcon width="1em" color="var(--input-icon)" />
        </CrossIconContainer>
      )}
    </>
  );
};

export default memo(InputIcons);
