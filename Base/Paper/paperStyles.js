import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: ${({ bg }) => bg || 'var(--paper-bg)'};
  ${({ outline }) =>
    outline
      ? css`
          border: 1px solid var(--paper-border);
        `
      : css`
          box-shadow: ${({ elevation, x, y }) =>
              `${0.25 * elevation * x}px ${0.5 * elevation * y}px ${
                1 * elevation
              }px`}
            rgba(0, 0, 0, 0.22);
        `}
  border-radius: ${({ radius }) => `${radius * 0.05}em`};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: 100%;
  height: 100%;
`;
