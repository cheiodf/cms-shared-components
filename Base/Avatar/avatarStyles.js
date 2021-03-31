import styled from 'styled-components';
import Img from 'react-cool-img';
import { zIndex } from '../../../cms-shared-components/utils/constants//zIndex';

const avatarSizes = {
  xxs: '.67rem',
  xs: '1rem',
  sm: '2rem',
  md: '3rem',
  lg: '5rem',
  xl: '9rem'
};

export const AvatarContainer = styled.div`
  font-size: ${({ size }) => avatarSizes[size]};
  width: 3em;
  height: 3em;
  min-width: 3em;
  min-height: 3em;
  position: relative;
  display: inline-block;
`;

export const ImageBackdrop = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.xs};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  user-select: none;
`;

export const ImageIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
