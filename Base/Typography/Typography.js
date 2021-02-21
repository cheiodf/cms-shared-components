import { props, defaultProps } from './typographyProps';
import { TypographyComponent } from './typographyStyles';

const Typography = ({
  onClick,
  children,
  onHover,
  inline,
  wordWrap,
  disabled,
  italic,
  uppercase,
  lowercase,
  capitalize,
  lineHeight,
  maxLines,
  ...props
}) => {
  const converKeysToLowerCase = obj => {
    const newObj = {};
    Object.keys(obj).forEach(key => (newObj[key.toLowerCase()] = obj[key]));
    return newObj;
  };

  const onHoverLoweCaseKeys = converKeysToLowerCase(onHover);

  return (
    <TypographyComponent
      onClick={!disabled ? onClick : null}
      hover={onHoverLoweCaseKeys}
      inline={+!!inline}
      wordwrap={+!!wordWrap}
      disabled={+!!disabled}
      italic={+!!italic}
      uppercase={+!!uppercase}
      lowercase={+!!lowercase}
      capitalize={+!!capitalize}
      lineheight={lineHeight}
      maxlines={maxLines}
      {...props}
    >
      {children}
    </TypographyComponent>
  );
};

Typography.propTypes = props;
Typography.defaultProps = defaultProps;

export default Typography;
