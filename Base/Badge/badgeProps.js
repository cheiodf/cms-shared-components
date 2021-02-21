import PropTypes from 'prop-types';

export const props = {
  content: PropTypes.number.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'accent',
    'default',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  children: PropTypes.node,
  max: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl'])
};

export const defaultProps = {
  variant: 'primary',
  max: 99,
  content: 0,
  size: 'sm'
};
