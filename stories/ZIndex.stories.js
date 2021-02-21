import React from 'react';
import { zIndex } from '../utils/constants/zIndex';
import Typography from '../components/Base/Typography/Typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UiKit/ZIndex',
  component: <div></div>,
  argTypes: {},
  args: {}
};

const Item = ({ name, value }) => {
  if (!name || !value) return null;
  return (
    <div
      style={{
        borderRadius: '.5em',
        overflow: 'hidden',
        border: '1px solid var(--light3)',
        display: 'flex',
        flexDirection: 'column'
      }}
      title="Copiar Hex"
    >
      <div
        style={{
          backgroundColor: '#f4f5f7',
          padding: '2rem 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          flex: 1
        }}
      >
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
              {name}
            </span>
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#62748c', lineHeight: '16px' }}>
              VALUE
            </p>
            <span
              style={{
                fontSize: 13,
                color: '#62748c',
                lineHeight: '16px',
                fontWeight: 600
              }}
            >
              {value}
            </span>
          </div>
        </>
      </div>
    </div>
  );
};

const Template = () => (
  <>
    <Typography tag="h2">Z Index</Typography>

    <Typography tag="p" margin="0 0 2em 0" inline>
      To use the z index values you must import the object located in{' '}
      <b>src/utils/constants/zIndex</b>
    </Typography>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '1rem'
      }}
    >
      {Object.keys(zIndex).map((key, i) => (
        <Item key={i} name={key} value={zIndex[key]} />
      ))}
    </div>
  </>
);

export const ZIndex = Template.bind({});
ZIndex.args = {
  content: 10
};
ZIndex.storyName = 'Z Index';
