import styled, { css } from 'styled-components';
import { zIndex } from '../../../../cms-shared-components/utils/constants//zIndex';
import {
  RadioButtonContainer,
  RadioButtonTitle,
  RadioButtonItemsContainer,
  RadioButtonItemContainer,
  RadioButtonText,
  RadioButtonInput
} from '../RadioButton/radioButtonStyles';

export const CheckboxContainer = styled(RadioButtonContainer)``;

export const CheckboxTitle = styled(RadioButtonTitle)``;

export const CheckboxItemsContainer = styled(RadioButtonItemsContainer)``;

export const CheckboxItemContainer = styled(RadioButtonItemContainer)`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const CheckboxText = styled(RadioButtonText)`
  position: relative;
  ::before {
    border-radius: 0.25em;
  }

  ::after {
    border-radius: 0.25em;
  }
`;

export const CheckboxIcon = styled.div`
  opacity: 0;
  transition: all 0.2s ease;
  position: absolute;
  top: 50%;
  left: calc(var(--size) / 2);
  transform: translate(-50%, -50%);
  display: flex;
  z-index: ${zIndex.xs};
  width: calc(var(--size) / 1.5);
`;

export const CheckboxInput = styled(RadioButtonInput)`
  display: none;

  :checked {
    + ${CheckboxText} {
      ::before {
        border-color: transparent;
      }
      ::after {
        opacity: 1;
      }
      ${CheckboxIcon} {
        opacity: 1;
      }
    }
  }
`;
