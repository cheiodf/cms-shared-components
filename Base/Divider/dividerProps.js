import PropTypes from 'prop-types';

export const props = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.number,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const defaultProps = {
  orientation: 'horizontal',
  fullWidth: true,
  size: 1
};
