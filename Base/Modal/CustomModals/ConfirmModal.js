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
  subdescription,
  onAccept,
  buttonAcceptTitle = 'ACEPTAR',
  buttonCloseTitle = 'CANCELAR',
  handleClose,
  loading,
  icon: Icon,
  size,
  type = 'confirm'
}) => {
  return (
    <>
      <ModalConfirmTextContainer center={Icon}>
        {Icon && (
          <ModalConfirmIconContainer>
            <Icon width="50" color={`var(--modal-${type})`} />
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
        <Typography
          align={Icon ? 'center' : null}
          size={Icon ? 0.95 : null}
          lineHeight={2.5}
        >
          {description}
        </Typography>
        <Typography align={Icon ? 'center' : null} size={Icon ? 0.85 : null}>
          {subdescription}
        </Typography>
      </ModalConfirmTextContainer>

      <ModalButtons
        onClose={handleClose}
        onAccept={onAccept}
        buttonAcceptTitle={buttonAcceptTitle}
        buttonCloseTitle={buttonCloseTitle}
        disabled={loading}
        size={size}
        type={type}
      />
    </>
  );
};

ConfirmModal.propTypes = ConfirmModalProps;

export default ConfirmModal;
