import PropTypes from 'prop-types';
import { inputDefaultProps, inputProps } from '../inputProps';
export const props = {
  ...inputProps,
  options: PropTypes.arrayOf(PropTypes.object),
  direction: PropTypes.oneOf(['row', 'column'])
};

export const defaultProps = {
  ...inputDefaultProps,
  options: [],
  defaultValue: '',
  direction: 'column'
};
