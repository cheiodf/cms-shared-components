import PropTypes from 'prop-types';

export const props = {
  children: PropTypes.node.isRequired,
  containerOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'center', 'bottom'])
  }),
  popoverOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'center', 'bottom'])
  }),
  popoverContent: PropTypes.node,
  width: PropTypes.number,
  maxHeight: PropTypes.number,
  closeOnClickPopover: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  paperProps: PropTypes.object,
  responsiveType: PropTypes.oneOf([
    'sidebarLeft',
    'sidebarRight',
    'sidebarFullWidthLeft',
    'sidebarFullWidthRight',
    'bottomsheet'
  ])
};

export const defaultProps = {
  containerOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  popoverOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  maxHeight: 500
};
