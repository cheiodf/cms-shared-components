import { css } from 'styled-components';
import agnosticStyled from '../../../cms-shared-components/utils/agnosticStyled';

const defaultTagProps = {
  h1: { size: 2, margin: '0 0 0.35em 0', weight: 'bold' },
  h2: { size: 1.625, margin: '0 0 0.35em 0', weight: 'bold' },
  h3: { size: 1.25, margin: '0 0 0.35em 0', weight: 'bold' },
  h4: { size: 1, margin: '0 0 0.35em 0', weight: 'bold' },
  h5: { size: 0.85, margin: '0 0 0.35em 0', weight: 'bold' },
  h6: { size: 0.75, margin: '0 0 0.35em 0', weight: 'bold' },
  p: { size: 1, margin: '', weight: '' },
  span: { size: 0.85, margin: '', weight: '' },
  a: { size: 1, margin: '', weight: '', color: 'info-variant' }
};

const typographyStyles = (
  {
    tag,
    color,
    align,
    inline,
    maxlines,
    onClick,
    decoration,
    wordwrap,
    disabled,
    lowercase,
    uppercase,
    capitalize,
    lineheight,
    padding,
    margin,
    italic,
    weight,
    size
  },
  defaultTagProps = {}
) => {
  size = size ?? defaultTagProps[tag]?.size;
  weight = weight ?? defaultTagProps[tag]?.weight;
  color = color ?? defaultTagProps[tag]?.color ?? 'default';
  margin = margin ?? defaultTagProps[tag]?.margin;

  return css`
    ${weight &&
    css`
      font-family: ${`Open Sans${
        weight !== 'regular' &&
        ' ' +
          weight
            ?.toLowerCase()
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('')
      }`};
    `};

    ${size &&
    css`
      font-size: ${`${size}em`};
    `};

    ${color &&
    css`
      color: ${color.includes('var(--') || color.includes('#')
        ? color
        : `var(--${
            (color === 'default' || color === 'inverted' ? 'text-' : '') + color
          })`};
    `};

    ${align &&
    css`
      text-align: ${align};
    `};

    ${(maxlines >= 0 || typeof inline === 'number') &&
    css`
      display: ${maxlines > 0
        ? inline
          ? '-webkit-inline-box'
          : '-webkit-box'
        : inline
        ? 'inline-block'
        : 'block'};
    `};

    ${(margin || margin === 0) &&
    css`
      margin: ${margin};
    `};
    ${(padding || padding === 0) &&
    css`
      padding: ${padding};
    `};
    ${(lineheight || lineheight === 0) &&
    css`
      line-height: ${lineheight};
    `};

    ${decoration &&
    css`
      text-decoration: ${decoration};
    `};
    ${italic &&
    css`
      font-style: italic;
    `};
    ${lowercase &&
    css`
      text-transform: lowercase;
    `};
    ${uppercase &&
    css`
      text-transform: uppercase;
    `};
    ${capitalize &&
    css`
      text-transform: capitalize;
    `};

    ${(onClick || tag === 'a') &&
    css`
      cursor: pointer;
    `};

    ${disabled &&
    css`
      opacity: 0.6;
      cursor: default;
    `};

    ${wordwrap &&
    css`
      word-break: break-word;
    `};

    ${maxlines &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: ${maxlines};
      -webkit-box-orient: vertical;
    `};
  `;
};

export const TypographyComponent = agnosticStyled`
    transition: all .2s ease;
    ${props => typographyStyles(props, defaultTagProps)}

    
    ${({ hover }) =>
      Object.keys(hover)?.length &&
      css`
        :hover {
          ${typographyStyles(hover)}
        }
      `}

`;
