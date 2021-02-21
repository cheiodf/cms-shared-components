import { memo } from 'react';
// styles
import { Btn, ButtonIconContainer } from './buttonStyles';
// props
import { props, defaultProps } from './buttonProps';

const Button = props => {
  const { isLoading, children, onClick, disabled, IconLeft, IconRight } = props;

  return (
    <Btn {...props} onClick={!isLoading && !disabled ? onClick : null}>
      {IconLeft && (
        <ButtonIconContainer {...props} position="left">
          <IconLeft width="1em" />
        </ButtonIconContainer>
      )}
      {IconRight && (
        <ButtonIconContainer {...props} position="right">
          <IconRight width="1em" />
        </ButtonIconContainer>
      )}

      <span>{isLoading ? 'loading...' : children}</span>
    </Btn>
  );
};

Button.propTypes = props;
Button.defaultProps = defaultProps;

export default memo(Button);
