import PropTypes from 'prop-types';

export const inputProps = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['default', 'danger', 'success']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  margin: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  error: PropTypes.string,
  success: PropTypes.string
};

export const inputDefaultProps = {
  placeholder: 'Placeholder',
  size: 'md',
  variant: 'default',
  margin: '1.2em 0 2.5em',
  disabled: false,
  isLoading: false
};
