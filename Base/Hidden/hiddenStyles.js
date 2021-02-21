import styled, { css } from 'styled-components';
import {
  breakpoints,
  breakpointsMin
} from '../../../utils/constants/breakpoints';

const bpSorted = Object.keys(breakpoints);

const getNextBP = bp => bpSorted[bpSorted.indexOf(bp) + 1];

export const Container = styled.div`
  ${({ only }) =>
    only?.split(' ').map(bp => {
      const nextBP = getNextBP(bp);
      if (nextBP) {
        return css`
          @media screen and (min-width: ${breakpointsMin[
              bp
            ]}) and (max-width: ${breakpoints[getNextBP(bp)]}) {
            display: none;
          }
        `;
      } else {
        return css`
          @media screen and (min-width: ${breakpointsMin[bp]}) {
            display: none;
          }
        `;
      }
    })}

  ${({ up }) => css`
    @media screen and (min-width: ${breakpointsMin[up]}) {
      display: none;
    }
  `}
  ${({ down }) => css`
    @media screen and (max-width: ${breakpoints[down]}) {
      display: none;
    }
  `}
`;
