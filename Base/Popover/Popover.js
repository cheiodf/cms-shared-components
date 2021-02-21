import { useEffect, useMemo, memo, useCallback } from 'react';
import { props, defaultProps } from './popoverProps';
import useComponentVisible from '../../../hooks/useComponentVisible';
import Paper from '../Paper/Paper';
import {
  Container,
  Content,
  PopoverContainer,
  PopoverOverlay,
  PopoverCrossIcon
} from './popoverStyles';
import Hidden from '../Hidden/Hidden';
import { CrossIcon } from '../../Icons';

const Popover = ({
  children,
  popoverContent,
  closeOnClickPopover,
  open,
  setIsOpen,
  paperProps,
  responsiveType, // bottomsheet, sidebarLeft, sidebarRight, sidebarFullWidthLeft, sidebarFullWidthRight ,
  ...props
}) => {
  const openPropValidate = useMemo(() => typeof open === 'boolean', []); // it is validated if the open prop is being passed
  const initialOpenState = useMemo(() => (openPropValidate ? open : false), []); // if the prop open is received it is used as the default state of the popover
  const animationTime = useMemo(() => 200, []);

  const handleSetExternalOpen = useCallback(
    value => setIsOpen && setIsOpen(value),
    []
  );

  const {
    ref,
    isComponentVisible: isPopoverOpen,
    setIsComponentVisible: setIsPopoverOpen
  } = useComponentVisible(initialOpenState, animationTime, () =>
    handleSetExternalOpen(false)
  );

  const handleToggleOpen = (isOpen, updateExternalOpen) => {
    if (isOpen) {
      setIsPopoverOpen(0.5); // the value 0.5 indicates that it is closing. Used for animation in css
      updateExternalOpen && handleSetExternalOpen(false);
      setTimeout(() => setIsPopoverOpen(false), animationTime); // closing delay for css animation
    } else {
      setIsPopoverOpen(true);
      updateExternalOpen && handleSetExternalOpen(true);
    }
  };

  useEffect(() => {
    const hasToUpdateLocalState =
      open !== isPopoverOpen && isPopoverOpen !== 0.5 && openPropValidate;

    hasToUpdateLocalState && handleToggleOpen(!open); // update isPopoverOpen state when open prop changes
  }, [open, isPopoverOpen]);

  return (
    <>
      {responsiveType && <PopoverOverlay open={isPopoverOpen} />}

      <Container
        onClick={() => handleToggleOpen(isPopoverOpen, true)}
        ref={ref}
      >
        {isPopoverOpen && (
          <PopoverContainer
            open={isPopoverOpen}
            onClick={e => !closeOnClickPopover && e.stopPropagation()}
            animationTime={animationTime}
            responsiveType={responsiveType}
            {...props}
          >
            <Paper {...paperProps}>
              {responsiveType && (
                <PopoverCrossIcon
                  onClick={() => handleToggleOpen(isPopoverOpen, true)}
                >
                  <CrossIcon width="14" color="#8898AA" />
                </PopoverCrossIcon>
              )}
              {popoverContent}
            </Paper>
          </PopoverContainer>
        )}
        <Content>{children}</Content>
      </Container>
    </>
  );
};

Popover.propTypes = props;
Popover.defaultProps = defaultProps;

export default memo(Popover);
