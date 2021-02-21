import styled, { css, keyframes } from 'styled-components';
import { zIndex } from '../../../cms-shared-components/utils/constants//zIndex';
import { breakpoints } from '../../../cms-shared-components/utils/constants//breakpoints';

const modalWidth = {
  xs: '350px',
  sm: '450px',
  md: '500px',
  lg: '600px',
  xl: '700px'
};

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: ${zIndex.modalBackdrop};
  padding: 1rem;
`;

const modalAnimation = keyframes`
  from {
    transform: translateY(5rem);
    opacity: 0
  }
  to {
    transform: translateY(0);
    opacity: 1
  }
`;

const modalAnimationReverse = keyframes`
  from {
    transform: translateY(0);
    opacity: 1
  }
  to {
    transform: translateY(5rem);
    opacity: 0
  }
`;

export const ModalContainer = styled.div`
  width: ${({ size }) => modalWidth[size]};
  max-width: 95%;
  outline: 0;
  line-height: 0;
  position: relative;
  transition: all 0.2s ease;
  animation: ${modalAnimation} ${({ animationDuration }) => animationDuration}ms
    ease forwards;
  max-height: calc(100vh - 2rem);
  ${({ loading }) =>
    !loading &&
    css`
      overflow-y: auto;
    `};
  ${({ open }) =>
    open === 0.5 &&
    css`
      animation: ${modalAnimationReverse}
        ${({ animationDuration }) => animationDuration}ms ease forwards;
    `}
`;

export const ModalSubcontainer = styled.div`
  padding: 2rem;

  ${({ disabled }) =>
    disabled &&
    css`
      transform: scale(0);
      opacity: 0;
    `}
`;

export const ModalCrossIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
`;

export const ModalLoaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 3rem;
  gap: 1em;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
  min-width: 9rem;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      flex: 1;
    `}

  @media screen and (max-width: ${breakpoints.sm}) {
    flex: 1;
  }
`;

// edit avatar modal
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

export const Image = styled.img``;

// confirm modal
export const ModalConfirmTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ center }) =>
    center &&
    css`
      align-items: center;
      padding: 6rem 0 5rem;
    `}
`;

export const ModalConfirmIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;
