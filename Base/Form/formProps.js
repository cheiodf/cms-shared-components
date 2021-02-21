import PropTypes from 'prop-types';

export const props = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export const defaultProps = {
  loading: false
};
