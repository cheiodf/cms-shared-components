import { itemProps, itemDefaultProps } from './gridProps';
import { GridItemContainer } from './gridStyles';

const GridItem = ({ children, ...props }) => {
  return <GridItemContainer {...props}>{children}</GridItemContainer>;
};

GridItem.propTypes = itemProps;
GridItem.defaultProps = itemDefaultProps;

export default GridItem;
