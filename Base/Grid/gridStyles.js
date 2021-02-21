import styled, { css } from 'styled-components';
import { breakpointsMin } from '../../../utils/constants/breakpoints';

const gridItemStyles = ({ cols, rows, colStart, rowStart, order }) =>
  css`
    ${cols &&
    css`
      grid-column-end: span ${cols};
    `};
    ${rows &&
    css`
      grid-row-end: span ${rows};
    `};
    ${colStart &&
    css`
      grid-column-start: ${colStart};
    `};
    ${rowStart &&
    css`
      grid-row-start: ${rowStart};
    `};
    ${order &&
    css`
      order: ${order};
    `};
  `;

const gridContainerStyles = ({ cols, gap, columnGap, rowGap }) =>
  css`
    grid-template-columns: ${typeof +cols === 'number' && !isNaN(+cols)
      ? `repeat(${cols}, 1fr)`
      : cols};
    ${gap &&
    css`
      grid-gap: ${gap}rem;
    `};
    ${columnGap &&
    css`
      grid-column-gap: ${columnGap}rem;
    `};
    ${rowGap &&
    css`
      grid-row-gap: ${rowGap}rem;
    `};
  `;

const gridResponsive = (bp, responsiveProps, styles) => {
  const type = typeof responsiveProps;
  const onlyColumns = type === 'string' || type === 'number';
  const props = onlyColumns ? { cols: responsiveProps } : responsiveProps;

  return css`
    @media screen and (min-width: ${breakpointsMin[bp]}) {
      ${styles(props)}
    }
  `;
};

export const GridContainer = styled.div`
  display: grid;
  ${({ cols, gap, columnGap, rowGap }) =>
    gridContainerStyles({ cols, gap, columnGap, rowGap })};

  ${({ xs }) => xs && gridResponsive('xs', xs, gridContainerStyles)};
  ${({ sm }) => sm && gridResponsive('sm', sm, gridContainerStyles)};
  ${({ md }) => md && gridResponsive('md', md, gridContainerStyles)};
  ${({ lg }) => lg && gridResponsive('lg', lg, gridContainerStyles)};
  ${({ xl }) => xl && gridResponsive('xl', xl, gridContainerStyles)};
`;

// item
export const GridItemContainer = styled.div`
  ${({ cols, rows, colStart, rowStart, order }) =>
    gridItemStyles({ cols, rows, colStart, rowStart, order })};

  ${({ xs }) => xs && gridResponsive('xs', xs, gridItemStyles)};
  ${({ sm }) => sm && gridResponsive('sm', sm, gridItemStyles)};
  ${({ md }) => md && gridResponsive('md', md, gridItemStyles)};
  ${({ lg }) => lg && gridResponsive('lg', lg, gridItemStyles)};
  ${({ xl }) => xl && gridResponsive('xl', xl, gridItemStyles)};
`;
