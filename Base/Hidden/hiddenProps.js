import PropTypes from 'prop-types';
import { breakpoints } from '../../../utils/constants/breakpoints';

export const props = {
  children: PropTypes.node.isRequired,
  only: PropTypes.oneOf(Object.keys(breakpoints)),
  down: PropTypes.oneOf(Object.keys(breakpoints)),
  up: PropTypes.string
};

export const defaultProps = {};
