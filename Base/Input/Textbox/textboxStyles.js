import styled, { css } from 'styled-components';
import { input } from '../inputStyles';

export const Input = styled.input`
  ${input};

  :not(:focus) {
    ${({ hasPlaceholder, type }) =>
      !hasPlaceholder &&
      type.includes('date') &&
      css`
        transition: none;
        color: transparent;

        &[type='datetime-local']::before,
        &[type='date']::before {
          color: var(--input-color);
          content: attr(placeholder);
          opacity: 0.7;
        }
      `}
  }
`;
