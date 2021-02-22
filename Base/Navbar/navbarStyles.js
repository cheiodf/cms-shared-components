import styled, { css } from 'styled-components';
import { breakpoints } from '../../utils/constants/breakpoints';
import { zIndex } from '../../utils/constants/zIndex';

export const Nav = styled.nav`
  height: 80px;
  grid-area: nav;
  display: grid;
  grid-template-areas: 'search icons';
  grid-gap: 1rem;
  position: sticky;
  top: 0;
  z-index: ${zIndex.navbar};

  background-color: var(--nav-bg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  transition: background-color 0.2s ease;

  padding: 1rem 2rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-left: 0;
    padding: 1rem;
    grid-template-areas: 'icons avatar';
  }
`;

export const NavSearchContainer = styled.div`
  grid-area: search;
  max-width: 23rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 1rem;
    max-width: 100%;
    background-color: var(--nav-bg);
    z-index: ${zIndex.navbar};
    transition: all 0.2s ease;

    ${({ open }) =>
      !open
        ? css`
            opacity: 0;
            transform: translateY(-100%);
          `
        : css`
            opacity: 1;
            transform: translateY(0);
          `}
  }
`;

export const NavSearchSubcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    border-radius: 10rem;
    background-color: var(--search-input-bg);
    border: 0;
    color: var(--search-color);
    padding-left: 1.5rem;

    ::placeholder {
      color: var(--search-secondary-color);
    }
  }
`;

export const NavSearchCloseIcon = styled.div`
  --padding: 0.5rem;
  cursor: pointer;
  padding: var(--padding);
  margin-left: calc(var(--padding) * -1);
`;

export const NavIconsContainer = styled.div`
  grid-area: icons;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 1.3rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    grid-area: avatar;
  }
`;

export const NavAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 10rem;
`;

export const NavAccountPopoverContainer = styled.div`
  padding: 1rem 0.5rem 0.5rem;
`;

export const NavAccountPopoverItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

export const NavResponsiveIconsContainer = styled.div`
  grid-area: icons;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export const NavResponsiveIconContainer = styled(NavSearchCloseIcon)``;
