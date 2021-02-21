import { memo } from 'react';
import { ButtonContainer, ModalButtonsContainer } from './modalStyles';
import Button from '../Button/Button';

const ModalButtons = ({
  onClose,
  onAccept,
  buttonAcceptTitle,
  disabled,
  size
}) => {
  return (
    <ModalButtonsContainer>
      <ButtonContainer fullWidth={size === 'xs' || size === 'sm'}>
        <Button
          onClick={onClose}
          variant="white"
          size="sm"
          margin={0}
          disabled={disabled}
          fullWidth
        >
          CANCELAR
        </Button>
      </ButtonContainer>
      <ButtonContainer fullWidth={size === 'xs' || size === 'sm'}>
        <Button
          onClick={onAccept}
          variant="primary"
          size="sm"
          margin={0}
          disabled={disabled}
          fullWidth
        >
          {buttonAcceptTitle || 'ACEPTAR'}
        </Button>
      </ButtonContainer>
    </ModalButtonsContainer>
  );
};

export default memo(ModalButtons);
