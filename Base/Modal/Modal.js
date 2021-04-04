import { memo, useState, useMemo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ModalBackdrop,
  ModalContainer,
  ModalCrossIconContainer,
  ModalLoaderContainer,
  ModalSubcontainer
} from './modalStyles';
import ModalsLibs from '../../../store/Modals/modalsLibs';
import { closeModal } from '../../../store/Modals/modalsActions';
import Paper from '../Paper/Paper';
import { CrossIcon } from '../../../components/Icons';
import CircleLoader from '../Loader/CircleLoader';
import { props, defaultProps } from './modalProps';
import Loader from '../../../components/Loader/Loader';

const Modal = ({ component, ...props }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { loading, size } = props;

  const animationDuration = useMemo(() => 200, []);

  const handleCloseModal = useCallback(() => {
    if (open === true && !props.loading) {
      setOpen(0.5);
      setTimeout(() => {
        dispatch(closeModal());
        setOpen(false);
      }, animationDuration); // closing delay for css animation
    }
  }, [open, closeModal, animationDuration, setOpen, dispatch, props.loading]);

  useEffect(() => {
    // close on press escape
    const handleEscape = e => e.key === 'Escape' && handleCloseModal();
    document.addEventListener('keydown', handleEscape, true);
    return () => document.removeEventListener('keydown', handleEscape, true);
  }, [handleCloseModal]);

  useEffect(() => {
    component && setOpen(true); // keeps open state updated when modal is opened
  }, [component, setOpen]);

  return (
    <ModalBackdrop onClick={handleCloseModal}>
      <ModalContainer
        open={open}
        onClick={e => e.stopPropagation()}
        size={size}
        animationDuration={animationDuration}
        loading={+loading}
      >
        {!loading && (
          <ModalCrossIconContainer onClick={handleCloseModal}>
            <CrossIcon width=".8rem" color="var(--modal-cross)" />
          </ModalCrossIconContainer>
        )}
        <Paper radius={10} elevation={10}>
          {loading && (
            <ModalLoaderContainer>
              <Loader size={50} color="var(--primary)" />
            </ModalLoaderContainer>
          )}
          <ModalSubcontainer disabled={loading}>
            {ModalsLibs.renderDialog(component, {
              ...props,
              handleClose: handleCloseModal
            })}
          </ModalSubcontainer>
        </Paper>
      </ModalContainer>
    </ModalBackdrop>
  );
};

Modal.propTypes = props;
Modal.defaultProps = defaultProps;

export default memo(Modal);
