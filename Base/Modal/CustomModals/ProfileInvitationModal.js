// import { useForm } from 'react-hook-form';

// import Form from '../../Form/Form';
import Textarea from '../../Input/Textarea/Textarea';
import Typography from '../../Typography/Typography';
import ModalButtons from '../ModalButtons';
// import Button from '../../Button/Button';

const ProfileInvitationModal = ({
  title,
  description,
  onAccept,
  handleClose,
  buttonAcceptTitle,
  loading,
  size,
  // onSubmit,
  // setMessage
}) => {
  // const { register, handleSubmit } = useForm();

  return (
    <div>
      <Typography tag="h2">{title}</Typography>
      <Typography>{description}</Typography>

     {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
        <Textarea 
          name="message"
          placeholder="Escribe tu mensaje"
          // onChange={(e) => setMessage(e.target.value)}
          // resgister={register()}
        />
  
        <ModalButtons
          onClose={handleClose}
          onAccept={onAccept}
          buttonAcceptTitle={buttonAcceptTitle}
          disabled={loading}
          size={size}
        />
     {/* </Form> */}
    </div>
  );
};

export default ProfileInvitationModal;
