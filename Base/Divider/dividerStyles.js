import styled, { css } from 'styled-components';

export const Container = styled.div`
  --size: ${({ fullWidth }) => (fullWidth ? '100%' : '80%')};
  ${({ size, orientation }) =>
    orientation === 'vertical'
      ? css`
          width: ${size}px;
          height: var(--size);
        `
      : css`
          width: var(--size);
          height: ${size}px;
        `};
  background-color: var(--divider);
  opacity: 0.13;
  margin: ${({ orientation, margin }) =>
    margin ?? (orientation === 'vertical' ? 'auto 1rem' : '1rem auto')};
`;
