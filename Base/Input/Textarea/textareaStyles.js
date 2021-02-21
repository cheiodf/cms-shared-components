import styled from 'styled-components';
import { input } from '../inputStyles';

export const TextareaInput = styled.textarea`
  ${input};
  min-height: 80px;
  max-height: 300px;
  min-width: 100%;
  max-width: 100%;
`;
