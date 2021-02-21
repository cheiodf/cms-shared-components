import React from 'react';
import Typography from '../components/Base/Typography/Typography';
import * as Icons from '../components/Icons/';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'UiKit/Icons',
  component: <div></div>,
  argTypes: {},
  args: {}
};

const Item = ({ name, Icon }) => {
  if (!name) return null;
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
          backgroundColor: '#f8f9fa',
          padding: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          flex: 1,
          alignItems: 'center'
        }}
      >
        <div>
          <Icon width={name === 'MoreIcon' ? 4 : 16} color="#393f49" />
        </div>
        <span
          style={{
            fontSize: 14,
            color: '#393f49',
            lineHeight: '16px',
            fontWeight: 600
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

const Template = () => (
  <>
    <Typography tag="h2">Icons</Typography>

    <Typography tag="p" margin="0 0 2em 0" inline>
      To use the icons you must import them from
      <b> src/components/Icons</b>. Example:
    </Typography>
    <Typography tag="p" margin="0 0 2em 0">
      <kbd>
        import {'{'} BellIcon, HomeIcon {'}'} from
        &quot;src/components/Icons&quot;
      </kbd>
    </Typography>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '1rem'
      }}
    >
      {Object.keys(Icons).map((key, i) => (
        <Item key={i} name={key} Icon={Icons[key]} />
      ))}
    </div>
  </>
);

export const AllIcons = Template.bind({});
AllIcons.args = {};
AllIcons.storyName = 'Icons';
