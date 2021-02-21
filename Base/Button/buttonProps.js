import PropTypes from 'prop-types';

export const props = {
  type: PropTypes.oneOf(['button', 'submit']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary',
    'accent',
    'danger',
    'warning',
    'info',
    'success',
    'dark',
    'light',
    'white',
    'black',
    'gray'
  ]),
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  IconRight: PropTypes.elementType,
  IconLeft: PropTypes.elementType,
  rounded: PropTypes.bool,
  weight: PropTypes.oneOf([
    'light',
    'regular',
    'semi-bold',
    'bold',
    'extra-bold'
  ]),
  color: PropTypes.string
};

export const defaultProps = {
  type: 'button',
  size: 'md',
  variant: 'primary',
  outline: false,
  fullWidth: false,
  disabled: false,
  isLoading: false,
  rounded: false,
  margin: '0.5rem 0',
  padding: '0.8em 2em',
  weight: 'regular'
};
