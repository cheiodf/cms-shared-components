import styled, { css } from 'styled-components';

export const FormContainer = styled.form``;

export const FormFieldset = styled.fieldset`
  border: none;
  padding: 0;
  max-width: 100%;
  display: contents;

  :disabled {
    * {
      ${({ disabled }) =>
        disabled &&
        css`
          opacity: 0.7;
        `};
    }
  }
`;
