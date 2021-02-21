import { useState } from 'react';
import AvatarImage from '../../Avatar/AvatarImage';
import InputFile from '../../Input/InputFile/InputFile';
import Typography from '../../Typography/Typography';
import ModalButtons from '../ModalButtons';
import { EditAvatarModalProps } from '../modalProps';
import { ImageContainer } from '../modalStyles';

const EditAvatarModal = ({
  handleClose,
  avatarSelected,
  onAccept,
  buttonAcceptTitle,
  loading,
  size
}) => {
  // FIXME: Real avatar from cookies or localStorage/redux

  const [imagePreview, setImagePreview] = useState(avatarSelected);

  const handleSetImagePreview = e => {
    if (e.target.files) return setImagePreview(e.target.files);
  };

  const handleAccept = () => {
    if (onAccept) onAccept(imagePreview);
    handleClose();
  };

  return (
    <>
      <InputFile
        name="avatar"
        onChange={handleSetImagePreview}
        accept="image/*"
      >
        <ImageContainer>
          <AvatarImage
            src={imagePreview ? URL.createObjectURL(imagePreview[0]) : ''}
            size="md"
            isEditable={true}
          />
          <Typography color="info-variant" margin=".75rem 0 0 0">
            Cambiar foto
          </Typography>
        </ImageContainer>
      </InputFile>

      <ModalButtons
        onClose={handleClose}
        onAccept={handleAccept}
        buttonAcceptTitle={buttonAcceptTitle || 'GUARDAR'}
        disabled={loading}
        size={size}
      />
    </>
  );
};

EditAvatarModal.propTypes = EditAvatarModalProps;

export default EditAvatarModal;
