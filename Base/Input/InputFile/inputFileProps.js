import PropTypes from 'prop-types';

export const props = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  accept: PropTypes.string,
  onChange: PropTypes.func
};

export const defaultProps = {};
