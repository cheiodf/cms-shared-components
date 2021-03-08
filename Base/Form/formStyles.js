import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  height: 100%;
`;

export const FormFieldset = styled.fieldset`
  border: none;
  padding: 0;
  max-width: 100%;
  /* display: contents; */
  height: 100%;
  display: flex;
  flex-direction: column;

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
