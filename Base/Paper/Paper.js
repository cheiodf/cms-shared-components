import { memo } from 'react';
import { Container } from './paperStyles';
import { props, defaultProps } from './paperProps';

const Paper = ({ children, shadowX, shadowY, ...props }) => (
  <Container
    {...props}
    x={shadowX === 'left' ? -1 : 1}
    y={shadowY === 'top' ? -1 : 1}
  >
    {children}
  </Container>
);

Paper.propTypes = props;
Paper.defaultProps = defaultProps;

export default memo(Paper);
