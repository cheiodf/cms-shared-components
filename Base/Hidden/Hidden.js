import { Container } from './hiddenStyles';
import { props, defaultProps } from './hiddenProps';

const Hidden = ({ children, only, down, up }) => (
  <Container only={only} down={down} up={up}>
    {children}
  </Container>
);

Hidden.propTypes = props;
Hidden.defaultProps = defaultProps;

export default Hidden;
