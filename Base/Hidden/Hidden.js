import { Container } from './hiddenStyles';
import { props, defaultProps } from './hiddenProps';
import { memo } from 'react';

const Hidden = ({ children, ...props }) => {
  const HiddenContainer = ({ children }) =>
    Object.keys(props).length ? (
      <Container {...props}>{children}</Container>
    ) : (
      <>{children}</>
    );

  return <HiddenContainer>{children}</HiddenContainer>;
};

Hidden.propTypes = props;
Hidden.defaultProps = defaultProps;

export default memo(Hidden);
