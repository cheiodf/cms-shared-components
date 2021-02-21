import styled, { css } from 'styled-components';

const inputSize = {
  xs: '.75rem',
  sm: '.9rem',
  md: '1rem',
  lg: '1.15rem',
  xl: '1.3rem'
};

export const InputContainer = styled.label`
  position: relative;

  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => inputSize[size]};

  display: flex;
  align-items: center;
  width: 100%;

  transition: all 0.2s ease;

  ${({ disabled, isLoading }) =>
    (disabled || isLoading) &&
    css`
      opacity: 0.5;
    `}
`;

export const input = css`
  padding: 0.75em 1em;

  border: 1px solid ${({ variant }) => `var(--input-${variant})`};
  border-radius: 0.4em;
  transition: all 0.2s ease;
  background-color: transparent;
  outline: 0;
  color: var(--input-color);
  line-height: 1.4;

  width: 100%;

  ${({ IconLeft }) =>
    IconLeft &&
    css`
      padding-left: 2.5em;
    `};

  ${({ IconRight }) =>
    IconRight &&
    css`
      padding-right: 2.5em;
    `};

  ::placeholder {
    color: var(--input-color);
    opacity: 0.7;
  }

  :focus {
    border-color: var(--input-focus-border);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const TextFeedback = styled.span`
  position: absolute;
  top: calc(100% + 0.3em);
  left: 0;
  color: ${({ color }) => `var(--text-${color})`};
`;

export const IconContainer = styled.div`
  position: absolute;
  display: flex;

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}

  ${({ position }) =>
    position === 'left'
      ? css`
          left: 1em;
        `
      : css`
          right: 1em;
        `}

  ${({ type }) =>
    type === 'textarea' &&
    css`
      top: 0.75em;
      transform: translateY(15%);
    `}

  font-size: 1em;
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  display: flex;
  cursor: pointer;
  right: -1.5em;

  font-size: 1em;
`;
