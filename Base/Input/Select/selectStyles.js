import styled, { css } from 'styled-components';
import { zIndex } from '../../../../utils/constants/zIndex';
import { input } from '../inputStyles';

export const SelectContainer = styled.div`
  ${input};
  padding: 0;
  overflow: hidden;

  display: flex;
  align-items: center;

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-color: var(--input-focus-border);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    `}
`;

export const SelectDialog = styled.div`
  position: absolute;
  top: calc(100% + 0.5em);
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: ${zIndex.dropdown};
`;

export const SelectOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  max-height: 200px;
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
`;

export const SelectInputSearchContainer = styled.div`
  padding: 1rem;

  input {
    border-radius: 1.2rem;
    border: 0;
    background-color: var(--input-select-search-bg);
    padding-left: 1.5rem;

    :focus {
      box-shadow: 0 0 0 transparent;
    }
  }
`;

export const SelectOptionContainer = styled.div`
  padding: 0.75em 1.2em;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: var(--input-select-item-selected);
        `
      : css`
          :hover {
            background-color: var(--input-select-item-selected);
          }
        `}

  cursor: pointer;
`;

const iconSpace = css`
  ${({ iconLeft }) =>
    iconLeft &&
    css`
      margin-left: 2.5em;
      padding-left: 0;
    `};
`;

export const SelectText = styled.span`
  color: var(--input-color);
  display: inline-block;
  padding: 0.75em 1em;
  ${iconSpace};
  ${({ isPlaceholder }) =>
    isPlaceholder &&
    css`
      opacity: 0.7;
    `}
`;

export const SelectTagsContainer = styled.div`
  display: flex;
  gap: 0.3em;
  padding: 0.45em 1em;
  border-radius: 0.5em;
  margin-right: 2.5em;
  overflow-x: auto;
  ${iconSpace};

  ::-webkit-scrollbar {
    height: 0.4em;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--scroll-bg);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    border-radius: 1em;
  }
`;

export const SelectTagContainer = styled.div`
  background-color: var(--input-select-tag-bg);
  padding: 0.301em 0.7em;
  padding-right: 0;
  border-radius: 0.4em;
  display: flex;
  align-items: center;
`;

export const SelectTagText = styled.span`
  color: var(--input-select-tag-color);
  white-space: nowrap;
  user-select: none;
`;

export const SelectTagCross = styled.span`
  color: var(--input-select-tag-color);
  margin-left: 0.1em;
  display: flex;
  padding: 0.25em 0.5em;
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
    `};
`;

export const SelectOptionsNotResults = styled.span`
  padding: 0.5em 0 1em;
  text-align: center;
  font-size: 1em;
  color: var(--input-select-item-color);
`;

export const SelectArrowContainer = styled.div`
  display: flex;
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
    `};
  transition: transform 0.2s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotateX(180deg);
    `}
`;
