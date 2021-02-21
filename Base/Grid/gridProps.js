import PropTypes from 'prop-types';

export const props = {
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.number,
  columnGap: PropTypes.number,
  rowGap: PropTypes.number,

  xs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export const defaultProps = {
  cols: 12
};

export const itemProps = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  colStart: PropTypes.number,
  rowStart: PropTypes.number,
  order: PropTypes.number,

  xs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export const itemDefaultProps = {};
