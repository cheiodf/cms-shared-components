import { memo, useState, useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { modalTypes } from '../../../store/Modals/modalsLibs';
import { openModal } from '../../../store/Modals/modalsActions';
import props, { defaultProps } from './avatarProps';
import InputFile from '../Input/InputFile/InputFile';
import AvatarImage from './AvatarImage';

const Avatar = forwardRef(({ src, onChange, isEditable, size, name }, ref) => {
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState({});
  const [image, setImage] = useState('');

  const defaultSrc = '/static/images/defaultAvatar.png';

  const handleOnChange = e => {
    if (e.target.files[0]) {
      const img = e.target.files;
      setImagePreview(img);
    } else return src;
  };

  const onAccept = img => {
    setImage(URL.createObjectURL(img[0]));
    onChange && onChange(img);
  };

  const handleOpenModal = () => {
    dispatch(
      openModal({
        component: modalTypes.EditAvatar,
        avatarSelected: imagePreview,
        onAccept
      })
    );
  };

  useEffect(() => {
    if (Object.keys(imagePreview).length) handleOpenModal();
  }, [imagePreview]);

  return isEditable ? (
    <InputFile ref={ref} name={name} onChange={handleOnChange} accept="image/*">
      <AvatarImage size={size} isEditable src={image || src || defaultSrc} />
    </InputFile>
  ) : (
    <AvatarImage
      size={size}
      isEditable={false}
      src={image || src || defaultSrc}
    />
  );
});

Avatar.propTypes = props;
Avatar.defaultProps = defaultProps;

export default memo(Avatar);
