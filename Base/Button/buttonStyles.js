import styled, { css } from 'styled-components';

const btnSize = {
  xs: '.75rem',
  sm: '.8rem',
  md: '.875rem',
  lg: '1rem',
  xl: '1.2rem'
};

export const Btn = styled.button`
  --main-bg: ${({ bg, variant }) => bg || `var(--btn-${variant})`};
  --main-color: ${({ color, variant }) =>
    color || `var(--btn-${variant}-color)`};
  font-size: ${({ size }) => btnSize[size]};
  font-family: ${({ weight }) =>
    `Open Sans${
      weight !== 'regular'
        ? ' ' +
          weight
            ?.toLowerCase()
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('')
        : ''
    }`};

  padding: ${({ padding }) => padding};
  border-radius: 0.5em;
  outline: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.06);
  word-break: break-word;
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  span {
    order: 1;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${({ disabled, isLoading }) =>
    disabled || isLoading
      ? css`
          opacity: 0.65;
          cursor: default;
        `
      : css`
          :active {
            transform: scale(0.98);
          }
        `}

  ${({ outline, color, border }) =>
    outline
      ? css`
          border: 0.0625em solid ${border || color || 'var(--main-bg)'};
          color: ${color || 'var(--main-bg)'};
          background-color: transparent;
        `
      : css`
          border: 0;
          background-color: var(--main-bg);
          color: var(--main-color);
        `};

  ${({ rounded }) =>
    rounded &&
    css`
      min-width: 3em;
      height: 3em;
      border-radius: 3em;
      padding: 0.5em;
    `}

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonIconContainer = styled.div`
  display: flex;

  ${({ position }) =>
    position === 'left'
      ? css`
          order: 0;
        `
      : css`
          order: 2;
        `}
  svg {
    ${({ outline, color }) =>
      outline
        ? css`
            fill: ${color || 'var(--main-bg)'};
          `
        : css`
            fill: var(--main-color);
          `};
  }
`;
