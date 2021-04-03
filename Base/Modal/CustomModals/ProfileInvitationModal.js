import { useState } from 'react';

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
  const [message, setMessage] = useState('');

  return (
    <div>
      <Typography tag="h2">{title}</Typography>
      <Typography>{description}</Typography>
      <Textarea 
        name="message"
        placeholder="Escribe tu mensaje"
        onChange={(e) => setMessage(e.target.value)}
      />
      <ModalButtons
        onClose={handleClose}
        onAccept={() => onAccept(message)}
        buttonAcceptTitle={buttonAcceptTitle}
        disabled={loading}
        size={size}
      />
    </div>
  );
};

export default ProfileInvitationModal;
