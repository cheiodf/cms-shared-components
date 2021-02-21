import styled, { css } from 'styled-components';
import { InputContainer } from '../inputStyles';

export const RadioButtonContainer = styled(InputContainer)`
  flex-direction: column;
  align-items: stretch;
`;

export const RadioButtonTitle = styled.p`
  margin-bottom: 1em;
`;

export const RadioButtonItemsContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 0.5em 1.5em;
  flex-wrap: wrap;
`;

export const RadioButtonItemContainer = styled.label`
  --size: 1em;
  padding: 0.25em 0;
  cursor: pointer;
  min-height: var(--size);
  display: flex;
  align-items: center;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `};
`;

export const RadioButtonText = styled.label`
  position: relative;
  padding-left: ${({ title }) =>
    title ? 'calc(var(--size) * 1.4)' : 'var(--size)'};
  line-height: 1.5em;
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ error, success }) =>
    error
      ? 'var(--text-danger)'
      : success
      ? 'var(--text-success)'
      : 'var(--input-radio-color)'};

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}

  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    border: 1px solid var(--input-radio-border-color);
    transition: all 0.2s ease;
  }

  ::after {
    content: '';
    width: var(--size);
    height: var(--size);
    background-color: var(--input-radio-selected-color);
    opacity: 0;
    position: absolute;
    left: 0;
    border-radius: 100%;
    transition: all 0.2s ease;
  }
`;

export const RadioButtonInput = styled.input`
  display: none;

  :checked + ${RadioButtonText}::after {
    opacity: 1;
  }
  :checked + ${RadioButtonText}::before {
    border-color: transparent;
  }
`;
