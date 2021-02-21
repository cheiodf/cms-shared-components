import PropTypes from 'prop-types';
import { inputDefaultProps, inputProps } from '../inputProps';

export const props = {
  ...inputProps,
  options: PropTypes.arrayOf(PropTypes.object),
  multiple: PropTypes.bool,
  rules: PropTypes.object,
  control: PropTypes.object,
  setValue: PropTypes.func,
  IconLeft: PropTypes.elementType,
  hasCross: PropTypes.bool
};

export const defaultProps = {
  ...inputDefaultProps,
  options: [],
  defaultValue: '',
  multiple: false,
  rules: {},
  hasCross: false
};
