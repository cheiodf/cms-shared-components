import styled from 'styled-components';
import { breakpoints } from '../../utils/constants/breakpoints';

export const FilterPopoverContainer = styled.div`
  padding: 1.5rem;
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  @media screen and (max-width: ${breakpoints.xxs}) {
    flex-direction: column;
  }
`;
