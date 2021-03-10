import {
  AvatarContainer,
  Image,
  ImageBackdrop,
  ImageIconWrapper
} from './avatarStyles';
// icons
import { EditIcon } from '../../../components/Icons';

const AvatarImage = ({ size, isEditable, src }) => {
  const defaultSrc = '/static/images/defaultAvatar.png';

  return (
    <AvatarContainer size={size}>
      {isEditable && (
        <ImageBackdrop>
          <ImageIconWrapper>
            <EditIcon width=".5em" color="#fff" />
          </ImageIconWrapper>
        </ImageBackdrop>
      )}
      <Image src={src || defaultSrc} cache={false} debounce={10} />
    </AvatarContainer>
  );
};

export default AvatarImage;
