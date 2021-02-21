import PropTypes from 'prop-types';

export const props = {
  home: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object)
};

export const defaultProps = {
  home: '/dashboard',
  links: []
};
