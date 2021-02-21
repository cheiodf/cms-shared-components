import styled, { css } from 'styled-components';

export const BreacrumbList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
`;

export const BreadcrumbItemContainer = styled.li`
  display: flex;
  align-items: center;
  ${({ active }) =>
    active &&
    css`
      cursor: pointer;
    `}
`;

export const BreadcrumbLinkSubItem = styled.span`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
