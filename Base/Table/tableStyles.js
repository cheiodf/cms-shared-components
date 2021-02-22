import styled, { css } from 'styled-components';
import { zIndex } from '../../../cms-shared-components/utils/constants//zIndex';
import { SelectContainer, SelectText } from '../Input/Select/selectStyles';

export const Container = styled.div``;

export const TableFullContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const TableContainer = styled.table`
  width: 100%;
  margin: 0 0 2rem;
  border-collapse: collapse;
`;

export const TableHeadContainer = styled.thead`
  background: var(--table-head-bg);
  width: 100%;
`;
export const TableHeadRow = styled.tr`
  text-align: left;
`;

const fixedLastColumn = css`
  background-color: var(--table-head-bg);
  position: sticky;
  right: 0;
  z-index: ${zIndex.xs};

  ::before {
    content: '';
    width: 10px;
    height: 100%;
    top: 0;
    left: -10px;
    position: absolute;
    transition: all 0.2s ease;

    box-shadow: -20px 0 10px -15px rgba(
        0,
        0,
        0,
        ${({ hasShadow }) => (hasShadow ? 0.1 : 0)}
      ) inset;
  }
`;

export const TableHeadCell = styled.th`
  padding: 1rem 1.5rem;
  :first-child {
    padding-left: 2rem;
  }
  :last-child {
    padding-right: 2rem;
  }
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-right: ${pl};
    `}
  color: var(--table-head-color);
  width: ${({ width = 'auto' }) => width};
  white-space: nowrap;
  cursor: pointer;

  ${({ active }) =>
    !active &&
    css`
      span {
        margin-right: 1.875rem;
        display: inline-block;
      }
    `}

  ${({ options }) =>
    options &&
    css`
      ${fixedLastColumn};
    `}
`;

export const TableHeadCellSubContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TableHeadCellArrowContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  transition: transform 0.2s ease;
  ${({ order }) =>
    order === -1 &&
    css`
      transform: rotateX(180deg);
    `};
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableBodyRow = styled(TableHeadRow)`
  border-bottom: 1px solid var(--table-divider);
  position: relative;
  transition: all 0.2s ease;
  ${({ hasPath }) =>
    hasPath &&
    css`
      cursor: pointer;
    `}

  ${({ active }) =>
    active &&
    css`
      td {
        background-color: var(--table-row-selected-bg);
      }
    `};
`;

export const TableBodyCell = styled.td`
  padding: 1rem 1.5rem;
  :first-child {
    padding-left: 2rem;
  }
  :last-child {
    ${({ options }) =>
      !options &&
      css`
        padding-right: 2rem;
      `}
  }
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-right: ${pl};
    `}
  color: var(--table-color);

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  ${({ options, isPopoverOpen }) =>
    options &&
    css`
      ${fixedLastColumn};
      ${isPopoverOpen &&
      css`
        z-index: ${zIndex.sm};
      `}
      background-color: var(--paper-bg);

      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${zIndex.md};
      }
    `};
`;

export const TableBodyCellSubcontainer = styled.div`
  display: flex;
  align-items: center;

  :last-child {
    ${({ options }) =>
      options &&
      css`
        justify-content: center;
      `}
  }
  position: relative;

  span {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.2;
  }
`;

// pagination
export const PaginationContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0.5em 1em;
`;

// more options
export const OptionsContainer = styled.div`
  cursor: pointer;
  margin: 0.5rem 0;
  display: flex;
`;

//  header
export const TableHeaderContainer = styled.div`
  padding: ${({ isPaddingMinor }) => (isPaddingMinor ? 0.5 : 1.6)}rem 2rem;
  display: flex;
  gap: 0 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TableTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--table-color);
  padding: 1.1rem 0;
`;

// global actions
export const TableButtonsContainer = styled.div`
  display: flex;
  gap: 0 0.5rem;
  flex-wrap: wrap;
`;

// multiple images in a cell
export const TableImagesContainer = styled.div`
  display: flex;
`;

export const TableImageContainer = styled.div`
  z-index: ${zIndex.xxs};
  :not(:first-child) {
    margin-left: -1.5rem;
  }

  :hover {
    z-index: ${zIndex.xs};
  }
`;

export const AvatarContainer = styled.div`
  background-color: var(--table-image-border);
  padding: 2px;
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  width: auto;
  margin-right: 0.75rem;
  display: flex;
`;

export const TableSelectLimit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 150px;
  width: 100%;
  margin-bottom: 1rem;

  ${SelectContainer} {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border-color: #fff;

    ${SelectText} {
      color: #fff;
      opacity: 1;
      padding: 0.5em 2.5em 0.5em 0.75em;
    }

    svg,
    path {
      fill: #fff;
    }
  }
`;
