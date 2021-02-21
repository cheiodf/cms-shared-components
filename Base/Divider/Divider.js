import { memo } from 'react';
import { props, defaultProps } from './dividerProps';
import { Container } from './dividerStyles';

const Divider = ({ size, fullWidth, orientation, margin }) => (
  <Container
    fullWidth={fullWidth}
    size={size}
    orientation={orientation}
    margin={margin}
  />
);

Divider.propTypes = props;
Divider.defaultProps = defaultProps;

export default memo(Divider);
