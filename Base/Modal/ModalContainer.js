import { memo } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const ModalContainer = () => {
  const { open, ...props } = useSelector(({ modals }) => modals);

  if (!open) return null;

  return <Modal {...props} />;
};

export default memo(ModalContainer);
