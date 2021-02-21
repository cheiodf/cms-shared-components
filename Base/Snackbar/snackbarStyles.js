import styled, { keyframes, css } from 'styled-components';
import { zIndex } from '../../../utils/constants/zIndex';

export const SnackbarContainer = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  gap: 0.5rem;
  transition: all 0.2s ease;
  z-index: ${zIndex.snackbar};
  max-width: calc(100% - 2rem);
`;

const snackbarAnimation = keyframes`
  from {
    left: -150%;
    opacity: 0
  }
  to {
    left: 0;
    opacity: 1
  }
`;

const snackbarAnimationReverse = keyframes`
  from {
    left: 0;
    opacity: 1
  }
  to {
    left: -150%;
    opacity: 0
  }
`;

export const SnackbarList = styled.ul`
  position: relative;
  width: 315px;
  max-width: 100%;
`;

export const SnackbarItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${props => `var(--snackbar-${props.variant})`};
  max-width: 100%;
  width: 100%;
  padding: 0.75rem 0.5rem 0.75rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 0;
  transform: translateY(
    calc(${({ index }) => index * -100}% - ${({ index }) => index * 0.5}rem)
  );

  height: 52px;
  position: absolute;
  bottom: 0;
  left: -150%;
  transition: transform 0.2s ease;

  animation: ${snackbarAnimation}
    ${({ animationDuration }) => animationDuration}ms ease forwards;

  ${({ open }) =>
    open === 0.5 &&
    css`
      animation: ${snackbarAnimationReverse}
        ${({ animationDuration }) => animationDuration}ms ease forwards;
    `}
`;

export const SnackbarIconContainer = styled.div`
  display: flex;
  min-width: 1rem;
`;

export const SnackbarRightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SnackbarCrossIconContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
`;

export const SnackbarActionTextContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 0.25rem;
  }

  p,
  a {
    white-space: nowrap;
  }
`;
