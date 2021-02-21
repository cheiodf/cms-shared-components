import PropTypes from 'prop-types';
import { inputDefaultProps, inputProps } from '../inputProps';

export const props = {
  ...inputProps,
  type: PropTypes.string,
  IconRight: PropTypes.elementType,
  IconLeft: PropTypes.elementType,
  hasCross: PropTypes.bool
};

export const defaultProps = {
  ...inputDefaultProps,
  type: 'text',
  hasCross: false
};
