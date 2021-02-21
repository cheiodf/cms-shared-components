import React from 'react';
import { colors } from '../utils/constants/theme';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UiKit/Colors',
  component: <div></div>,
  argTypes: {},
  args: {}
};

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const ColorItem = ({ color, varName, name }) => {
  const nameFirstLetterLowercase = name.charAt(0).toLowerCase() + name.slice(1);
  const varColor = colors[nameFirstLetterLowercase.replaceAll(' ', '')];

  if (!color && !varName) return null;
  return (
    <div
      style={{
        borderRadius: '.5em',
        overflow: 'hidden',
        border: '1px solid var(--light3)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
      onClick={() => copyToClipboard(varColor)}
      title="Copiar Hex"
    >
      <div
        style={{
          width: '100%',
          minHeight: 125,
          maxHeight: 200,
          height: '12vw',
          backgroundColor: color || `var(--${varName})`
        }}
      />
      <div
        style={{
          backgroundColor: '#f4f5f7',
          padding: '2rem 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          flex: 1
        }}
      >
        {color ? (
          <div>
            <p style={{ fontSize: 11, color: '#62748c', lineHeight: '16px' }}>
              COLOR
            </p>
            <span
              style={{
                fontSize: 13,
                color: '#62748c',
                lineHeight: '16px',
                fontWeight: 600
              }}
            >
              {color || '-'}
            </span>
          </div>
        ) : varName ? (
          <>
            <div>
              <p style={{ fontSize: 11, color: '#62748c', lineHeight: '16px' }}>
                NAME
              </p>
              <span
                style={{
                  fontSize: 13,
                  color: '#62748c',
                  lineHeight: '16px',
                  fontWeight: 600
                }}
              >
                {name || '-'}
              </span>
            </div>
            <div>
              <p style={{ fontSize: 11, color: '#62748c', lineHeight: '16px' }}>
                CSS VAR
              </p>
              <span
                style={{
                  fontSize: 13,
                  color: '#62748c',
                  lineHeight: '16px',
                  fontWeight: 600
                }}
              >
                {varName ? `var(--${varName})` : '-'}
              </span>
            </div>
            <div>
              <p style={{ fontSize: 11, color: '#62748c', lineHeight: '16px' }}>
                HEX
              </p>
              <span
                style={{
                  fontSize: 13,
                  color: '#62748c',
                  lineHeight: '16px',
                  fontWeight: 600
                }}
              >
                {varColor || '-'}
              </span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

const Template = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gridGap: '1rem'
    }}
  >
    <ColorItem varName="primary" name="Primary" />
    <ColorItem varName="primary-light" name="Primary Light" />
    <ColorItem varName="primary-dark" name="Primary Dark" />
    <ColorItem varName="accent" name="Accent" />
    <ColorItem varName="accent-dark" name="Accent Dark" />
    <ColorItem varName="success" name="Success" />
    <ColorItem varName="danger" name="Danger" />
    <ColorItem varName="warning" name="Warning" />
    <ColorItem varName="info" name="Info" />
    <ColorItem varName="info-variant" name="Info Variant" />
    <ColorItem varName="white" name="White" />
    <ColorItem varName="light" name="Light" />
    <ColorItem varName="light2" name="Light 2" />
    <ColorItem varName="light3" name="Light 3" />
    <ColorItem varName="gray" name="Gray" />
    <ColorItem varName="gray2" name="Gray 2" />
    <ColorItem varName="gray3" name="Gray 3" />
    <ColorItem varName="dark" name="Dark" />
    <ColorItem varName="dark2" name="Dark 2" />
    <ColorItem varName="dark3" name="Dark 3" />
    <ColorItem varName="dark4" name="Dark 4" />
    <ColorItem varName="black" name="Black" />
  </div>
);

export const Colors = Template.bind({});
Colors.args = {
  content: 10
};
Colors.storyName = 'Color Pallete';
