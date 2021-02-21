import { ConfirmModalProps } from '../modalProps';
// import { ModalButtons } from '../modalStyles';
import Typography from '../../Typography/Typography';
import ModalButtons from '../ModalButtons';
import {
  ModalConfirmIconContainer,
  ModalConfirmTextContainer
} from '../modalStyles';

const ConfirmModal = ({
  title,
  description,
  onAccept,
  buttonAcceptTitle,
  handleClose,
  loading,
  icon: Icon,
  size
}) => {
  return (
    <>
      <ModalConfirmTextContainer center={Icon}>
        {Icon && (
          <ModalConfirmIconContainer>
            <Icon width="50" color="var(--modal-confirm-icon)" />
          </ModalConfirmIconContainer>
        )}
        <Typography
          tag="h2"
          align={Icon ? 'center' : null}
          size={Icon ? 1.25 : null}
          margin={Icon ? '1.5rem 0 .5rem 0' : null}
        >
          {title}
        </Typography>
        <Typography align={Icon ? 'center' : null} size={Icon ? 0.95 : null}>
          {description}
        </Typography>
      </ModalConfirmTextContainer>

      <ModalButtons
        onClose={handleClose}
        onAccept={onAccept}
        buttonAcceptTitle={buttonAcceptTitle}
        disabled={loading}
        size={size}
      />
    </>
  );
};

ConfirmModal.propTypes = ConfirmModalProps;

export default ConfirmModal;
