import styled from 'styled-components';
import { zIndex } from '../../../utils/constants/zIndex';

const badgeSizes = {
  xxs: '.6rem',
  xs: '.7rem',
  sm: '.8rem',
  md: '.9rem',
  lg: '1rem',
  xl: '1.1rem'
};

export const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5em;
  min-height: 1.5em;
  padding: 0 0.41em;

  font-size: ${({ size }) => badgeSizes[size]};
  border-radius: 10em;
  color: ${({ variant }) =>
    variant === 'default' ? 'var(--text-inverted)' : 'var(--badge-color)'};

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: ${({ variant }) => `var(--badge-bg-${variant})`};
  z-index: ${zIndex.xs};
`;
