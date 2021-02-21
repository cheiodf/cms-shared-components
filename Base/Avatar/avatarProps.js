import PropTypes from 'prop-types';

export default {
  src: PropTypes.any.isRequired,
  isEditable: PropTypes.bool,
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl']),
  onChange: PropTypes.func,
  name: PropTypes.string,
  accept: PropTypes.string
};

export const defaultProps = {
  onClick: null,
  isEditable: true,
  size: 'sm',
  src: '/static/images/defaultAvatar.png'
};
