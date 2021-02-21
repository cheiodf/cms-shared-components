import PropTypes from 'prop-types';

export const props = {
  tag: PropTypes.any,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  color: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wordWrap: PropTypes.bool,
  maxLines: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  onHover: PropTypes.object,
  italic: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  weight: PropTypes.oneOf([
    'light',
    'regular',
    'semi-bold',
    'bold',
    'extra-bold'
  ]),
  size: PropTypes.number,
  decoration: PropTypes.oneOf(['line-through', 'underline', 'overline'])
};

export const defaultProps = {
  padding: 0,
  wordWrap: true,
  lineHeight: 1.4,
  onHover: {},
  tag: 'p',
  inline: false
};
