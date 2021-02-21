import styled, { css, keyframes } from 'styled-components';
import {
  breakpoints,
  breakpointsMin
} from '../../../utils/constants/breakpoints';
import { zIndex } from '../../../utils/constants/zIndex';
import { SidebarCrossIconContainer } from '../../Sidebar/sidebarStyles';
import { Container as PaperContainer } from '../Paper/paperStyles';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
`;

const popoverAnimation = keyframes`
  from {
    transform: var(--transform-x) var(--transform-y) scale(.5);
    opacity: 0
  }
  to {
    transform: var(--transform-x) var(--transform-y) scale(1);
    opacity: 1
  }
`;

const popoverAnimationReverse = keyframes`
  from {
    transform: var(--transform-x) var(--transform-y) scale(1);
    opacity: 1
  }
  to {
    transform: var(--transform-x) var(--transform-y) scale(.5);
    opacity: 0
  }
`;

const popoverBottomSheetAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
  `;
const popoverBottomSheetAnimationReverse = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
  `;

const popoverSidebarLeftAnimation = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;
const popoverSidebarLeftAnimationReverse = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(-100%);
}
`;
const popoverSidebarRightAnimation = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0);
}
`;
const popoverSidebarRightAnimationReverse = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(100%);
}
`;

const responsiveValues = css`
  ${({ responsiveType, open }) => {
    switch (responsiveType) {
      case 'bottomsheet':
        return css`
          position: fixed;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          top: auto !important;
          width: 100%;
          transition: all 0.2s ease;

          ${({ animationTime = 200 }) =>
            open === 0.5
              ? css`
                  animation: ${popoverBottomSheetAnimationReverse}
                    ${animationTime}ms ease forwards !important;
                `
              : open &&
                css`
                  animation: ${popoverBottomSheetAnimation} ${animationTime}ms
                    ease forwards !important;
                `};

          ${PaperContainer} {
            border-radius: 1.25rem 1.25rem 0 0;
            padding-top: 1rem;
            max-height: 95vh;
          }

          ${SidebarCrossIconContainer} {
            top: 0.5rem;
          }
        `;
      case 'sidebarLeft':
      case 'sidebarRight':
      case 'sidebarFullWidthLeft':
      case 'sidebarFullWidthRight':
        return css`
          position: fixed;
          left: 0 !important;
          right: auto !important;
          bottom: 0 !important;
          top: 0 !important;
          transition: all 0.2s ease;
          width: 350px;
          max-width: 100%;

          ${({ animationTime = 200 }) =>
            open === 0.5
              ? css`
                  animation: ${popoverSidebarLeftAnimationReverse}
                    ${animationTime}ms ease forwards !important;
                `
              : open &&
                css`
                  animation: ${popoverSidebarLeftAnimation} ${animationTime}ms
                    ease forwards !important;
                `};

          ${PaperContainer} {
            border-radius: 0;
            margin-top: 0;
            padding-top: 1rem;
            max-height: 100%;
          }
        `;
      default:
        return false;
    }
  }}

  ${({ responsiveType, open }) => {
    switch (responsiveType) {
      case 'sidebarRight':
      case 'sidebarFullWidthRight':
        return css`
          left: auto !important;
          right: 0 !important;
          ${({ animationTime = 200 }) =>
            open === 0.5
              ? css`
                  animation: ${popoverSidebarRightAnimationReverse}
                    ${animationTime}ms ease forwards !important;
                `
              : open &&
                css`
                  animation: ${popoverSidebarRightAnimation} ${animationTime}ms
                    ease forwards !important;
                `};
        `;
      default:
        return false;
    }
  }}

${({ responsiveType }) => {
    switch (responsiveType) {
      case 'sidebarFullWidthLeft':
      case 'sidebarFullWidthRight':
        return css`
          left: 0 !important;
          right: 0 !important;
          width: 100%;
        `;
      default:
        return false;
    }
  }}
`;

export const PopoverContainer = styled.div`
  position: absolute;
  width: ${({ width }) => (width ? width + 'px' : 'auto')};
  z-index: ${zIndex.popover};
  transition: all 0.2s ease;
  transform-origin: ${({ popoverOrigin: { horizontal, vertical } }) =>
    `${horizontal} ${vertical}`};
  cursor: default;

  --transform-x: translateX(0);
  --transform-y: translateY(0);
  --scale: scale(0);

  // horizontal align
  ${({ containerOrigin }) => {
    if (containerOrigin.horizontal === 'left') {
      return css`
        left: 0;
      `;
    } else if (containerOrigin.horizontal === 'center') {
      return css`
        left: 50%;
      `;
    } else if (containerOrigin.horizontal === 'right') {
      return css`
        left: 100%;
      `;
    }
  }}
  ${({ popoverOrigin }) => {
    if (popoverOrigin.horizontal === 'left') {
      return css``;
    } else if (popoverOrigin.horizontal === 'center') {
      return css`
        --transform-x: translateX(-50%);
      `;
    } else if (popoverOrigin.horizontal === 'right') {
      return css`
        --transform-x: translateX(-100%);
      `;
    }
  }}

  // vertical align
   ${({ containerOrigin }) => {
    if (containerOrigin.vertical === 'top') {
      return css`
        top: 0;
      `;
    } else if (containerOrigin.vertical === 'center') {
      return css`
        top: 50%;
      `;
    } else if (containerOrigin.vertical === 'bottom') {
      return css`
        top: 100%;
      `;
    }
  }} 
  ${({ popoverOrigin }) => {
    if (popoverOrigin.vertical === 'top') {
      return css``;
    } else if (popoverOrigin.vertical === 'center') {
      return css`
        --transform-y: translateY(-50%);
      `;
    } else if (popoverOrigin.vertical === 'bottom') {
      return css`
        --transform-y: translateY(-100%);
      `;
    }
  }}

  transform: var(--transform-x) var(--transform-y) var(--scale);

  ${({ open, animationTime = 200 }) =>
    open === 0.5
      ? css`
          --scale: scale(0);
          animation: ${popoverAnimationReverse} ${animationTime}ms ease forwards;
        `
      : open &&
        css`
          --scale: scale(1);
          animation: ${popoverAnimation} ${animationTime}ms ease forwards;
        `};

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      ${PaperContainer} {
        max-height: ${maxHeight}px;
      }
    `}
  ${PaperContainer} {
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0.4em;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--scroll-bg);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--scroll-color);
      border-radius: 1em;
    }
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    ${responsiveValues}
  }
`;

export const Content = styled.div``;

export const PopoverOverlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${zIndex.popover};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: scale(${({ open }) => (open ? 1 : 0)});
  transition: opacity 0.2s ease-out,
    transform 0s ease-out ${({ open }) => (open ? '0s' : '0.2s')};

  @media screen and (min-width: ${breakpointsMin.sm}) {
    display: none;
  }
`;

export const PopoverCrossIcon = styled(SidebarCrossIconContainer)``;

// item
export const PopoverItemContainer = styled.div`
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const PopoverItemText = styled.span`
  color: var(--popover-item-color);
  padding: 1.25em 1.5em;
  display: inline-block;
  width: 100%;
`;
