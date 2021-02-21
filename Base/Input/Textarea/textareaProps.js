import PropTypes from 'prop-types';
import { inputDefaultProps, inputProps } from '../inputProps';

export const props = {
  ...inputProps,
  IconRight: PropTypes.elementType,
  IconLeft: PropTypes.elementType
};

export const defaultProps = {
  ...inputDefaultProps
};
