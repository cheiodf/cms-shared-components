import { defaultProps, props } from './gridProps';
import { GridContainer } from './gridStyles';

const Grid = ({ children, ...props }) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};

Grid.propTypes = props;
Grid.defaultProps = defaultProps;

export default Grid;
