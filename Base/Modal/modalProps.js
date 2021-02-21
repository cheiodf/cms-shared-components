import PropTypes from 'prop-types';

export const props = {
  component: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  loading: PropTypes.bool
};

export const defaultProps = {
  component: '',
  size: 'md',
  loading: false
};

export const ConfirmModalProps = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleClose: PropTypes.func.isRequired
};

export const EditAvatarModalProps = {
  handleClose: PropTypes.func.isRequired
};
