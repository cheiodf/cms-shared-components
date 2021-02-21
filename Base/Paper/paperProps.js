import PropTypes from 'prop-types';

export const props = {
  elevation: PropTypes.number,
  radius: PropTypes.number,
  outline: PropTypes.bool,
  children: PropTypes.node,
  shadowX: PropTypes.oneOf(['left', 'right']),
  shadowY: PropTypes.oneOf(['top', 'bottom']),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bg: PropTypes.string
};

export const defaultProps = {
  elevation: 3,
  radius: 5,
  shadowX: 'right',
  shadowY: 'bottom',
  padding: 0,
  margin: 0
};
