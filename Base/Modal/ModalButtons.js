import { memo } from 'react';
import { ButtonContainer, ModalButtonsContainer } from './modalStyles';
import Button from '../Button/Button';

const ModalButtons = ({
  onClose,
  onAccept,
  buttonAcceptTitle,
  buttonCloseTitle,
  disabled,
  size,
  type
}) => {
  if (!buttonAcceptTitle && !buttonCloseTitle) return true;

  return (
    <ModalButtonsContainer>
      {buttonCloseTitle && (
        <ButtonContainer fullWidth={size === 'xs' || size === 'sm'}>
          <Button
            onClick={onClose}
            variant="white"
            size="sm"
            margin={0}
            disabled={disabled}
            fullWidth
          >
            {buttonCloseTitle}
          </Button>
        </ButtonContainer>
      )}

      {buttonAcceptTitle && (
        <ButtonContainer fullWidth={size === 'xs' || size === 'sm'}>
          <Button
            onClick={onAccept}
            variant={type === 'confirm' ? 'primary' : type}
            size="sm"
            margin={0}
            disabled={disabled}
            fullWidth
          >
            {buttonAcceptTitle}
          </Button>
        </ButtonContainer>
      )}
    </ModalButtonsContainer>
  );
};

export default memo(ModalButtons);
