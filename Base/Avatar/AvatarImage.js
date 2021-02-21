import {
  AvatarContainer,
  Image,
  ImageBackdrop,
  ImageIconWrapper
} from './avatarStyles';
// icons
import { EditIcon } from '../../../components/Icons';

const AvatarImage = ({ size, isEditable, src }) => {
  return (
    <AvatarContainer size={size}>
      {isEditable && (
        <ImageBackdrop>
          <ImageIconWrapper>
            <EditIcon width=".5em" color="#fff" />
          </ImageIconWrapper>
        </ImageBackdrop>
      )}
      <Image src={src} />
    </AvatarContainer>
  );
};

export default AvatarImage;
