import { props, defaultProps } from './badgeProps';
import { Circle, Container } from './badgeStyles';

const Badge = ({ children, content, max, ...props }) => (
  <Container>
    {content && max ? (
      <Circle {...props}>{content > max ? `${max}+` : content}</Circle>
    ) : null}
    {children}
  </Container>
);

Badge.propTypes = props;
Badge.defaultProps = defaultProps;

export default Badge;
