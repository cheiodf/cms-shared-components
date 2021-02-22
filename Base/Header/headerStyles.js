import styled from 'styled-components';
import { breakpoints } from '../../utils/constants/breakpoints';

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderSubcontainer = styled.div`
  width: 100%;
  background-color: #7678ed;
  padding: 0 2rem;
  padding-bottom: 8rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0 1rem 8rem;
  }
`;

export const HeaderNextContainer = styled.div`
  margin-top: -6rem;
  margin-bottom: 3rem;
  padding: 0 2rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 0 3rem;
`;

export const HeaderRouteDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  margin-left: auto;
  flex-wrap: wrap;
`;
