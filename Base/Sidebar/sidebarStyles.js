import styled, { css } from 'styled-components';
import { breakpoints, breakpointsMin } from '../../utils/constants/breakpoints';
import { zIndex } from '../../utils/constants/zIndex';

export const SidebarWrapper = styled.nav`
  grid-area: sidebar;
  position: sticky;
  top: 0;
  width: 270px;
  height: 100vh;
  background-color: var(--sidebar-bg);
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 5%);

  transition: all 0.2s ease-out;
  overflow-y: auto;
  padding: 1rem 1.5rem;
  z-index: 1;

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

  @media screen and (max-width: ${breakpoints.sm}) {
    position: fixed;
    width: 300px;
    max-width: 100%;
    z-index: ${zIndex.sidebar};

    transform: translateX(
      ${({ isSidebarOpen }) => (isSidebarOpen ? 0 : '-100%')}
    );
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${zIndex.sidebarOverlay};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? 1 : 0)};
  transform: scale(${({ isSidebarOpen }) => (isSidebarOpen ? 1 : 0)});
  transition: opacity 0.2s ease-out,
    transform 0s ease-out
      ${({ isSidebarOpen }) => (isSidebarOpen ? '0s' : '0.2s')};

  @media screen and (min-width: ${breakpointsMin.sm}) {
    display: none;
  }
`;

export const SidebarCrossIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
  @media screen and (min-width: ${breakpointsMin.sm}) {
    display: none;
  }
`;

export const SidebarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const SidebarLogo = styled.img`
  height: 100px;
  margin: 1rem 0;
  cursor: pointer;
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const SidebarItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  ${({ badge }) =>
    badge &&
    css`
      padding-right: 2rem;
    `};
  cursor: pointer;
  border-radius: 0.25rem;
  margin: 0 -1rem;
  position: relative;

  :hover {
    background-color: rgba(233, 236, 239, 0.34);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgba(233, 236, 239, 0.34);

      p {
        color: #5f71e4;
      }

      svg,
      svg * {
        fill: #5f71e4;
      }
    `}
`;

export const SidebarItemIcon = styled.div`
  min-width: 15px;
  width: 15px;
`;

export const SidebartItemBadgeContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  * {
    transform: none;
    position: static;
  }
`;
