import Textarea from '../../Input/Textarea/Textarea';
import Typography from '../../Typography/Typography';
import ModalButtons from '../ModalButtons';

const ProfileInvitationModal = ({
  title,
  description,
  onAccept,
  handleClose,
  buttonAcceptTitle,
  loading,
  size
}) => {
  return (
    <div>
      <Typography tag="h2">{title}</Typography>
      <Typography>{description}</Typography>

      <Textarea name="message" />

      <ModalButtons
        onClose={handleClose}
        onAccept={onAccept}
        buttonAcceptTitle={buttonAcceptTitle}
        disabled={loading}
        size={size}
      />
    </div>
  );
};

export default ProfileInvitationModal;
