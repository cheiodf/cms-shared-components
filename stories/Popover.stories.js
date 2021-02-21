import { useState } from 'react';
import Button from '../Base/Button/Button';
import Divider from '../Base/Divider/Divider';
import Popover from '../Base/Popover/Popover';
import PopoverItem from '../Base/Popover/PopoverItem';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    children: {
      control: { disable: true },
      description: 'Jsx element in which clicking will open the popover ',
      table: {
        type: { summary: 'element' },
        category: 'Prop'
      }
    },
    width: {
      control: 'number',
      description:
        'Popover width (in px). If it does not have an indicated value, it will be adjusted automatically',
      table: {
        type: { summary: 'number' },
        category: 'Prop'
      }
    },
    popoverContent: {
      control: { disable: true },
      description: 'Jsx element that will go inside the popover',
      table: {
        type: { summary: 'element' },
        category: 'Prop'
      }
    },
    popoverOrigin: {
      control: 'object',
      description: 'Popover origin position',
      table: {
        type: {
          summary: 'object',
          detail:
            'Object with 2 keys: horizontal (possible values: "left", "center", "right") and vertical (possible values: "top", "center", "bottom")',
          defaultValue: "{ horizontal: 'left', vertical: 'top' }"
        },
        defaultValue: "{ horizontal: 'left', vertical: 'top' }",
        category: 'Prop'
      }
    },

    containerOrigin: {
      control: 'object',
      description: 'Container popover origin position',
      table: {
        type: {
          summary: 'object',
          detail:
            'Object with 2 keys: horizontal (possible values: "left", "center", "right") and vertical (possible values: "top", "center", "bottom")',
          defaultValue: "{ horizontal: 'left', vertical: 'top' }"
        },
        defaultValue: "{ horizontal: 'left', vertical: 'top' }",
        category: 'Prop'
      }
    },

    closeOnClickPopover: {
      type: 'boolean',
      description: 'Defines if the popover is closed when clicking on itself',
      table: {
        type: {
          summary: 'bool',
          defaultValue: false
        },
        defaultValue: false,
        category: 'Prop'
      }
    },

    open: {
      type: 'boolean',
      control: { disable: true },
      description:
        'It is useful if we want to handle the popover state ourselves. When passing this prop, a prop called setOpen is also required',
      table: {
        type: {
          summary: 'bool',
          defaultValue: undefined
        },
        defaultValue: undefined,
        category: 'Prop'
      }
    },

    setOpen: {
      type: 'func',
      control: { disable: true },
      description:
        'It is used to change the state of the open prop, it is required if the open prop is passed and vice versa',
      table: {
        type: {
          summary: 'func'
        },
        category: 'Prop'
      }
    },
    paperProps: {
      type: 'object',
      description:
        'The popover uses the paper component, with this prop we can customize it',
      table: {
        type: {
          summary: 'object'
        },
        category: 'Prop'
      }
    },

    // then just documentation helpers, not props
    popoverOriginHorizontal: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
      description:
        '**NOT A PROP**, horizontal key from popoverOrigin object prop',
      table: {
        type: {
          summary: 'string',
          defaultValue: 'left'
        },
        defaultValue: 'left',
        category: 'NOT A PROP (documentation helpers)'
      }
    },
    popoverOriginVertical: {
      control: { type: 'select', options: ['top', 'center', 'bottom'] },
      description:
        '**NOT A PROP**, vertical key from popoverOrigin object prop',
      table: {
        type: {
          summary: 'string',
          defaultValue: 'bottom'
        },
        defaultValue: 'bottom',
        category: 'NOT A PROP (documentation helpers)'
      }
    },
    containerOriginHorizontal: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
      description:
        '**NOT A PROP**, horizontal key from containerOrigin object prop',
      table: {
        type: {
          summary: 'string',
          defaultValue: 'left'
        },
        defaultValue: 'left',
        category: 'NOT A PROP (documentation helpers)'
      }
    },

    containerOriginVertical: {
      control: { type: 'select', options: ['top', 'center', 'bottom'] },
      description:
        '**NOT A PROP**, vertical key from containerOrigin object prop',
      table: {
        type: {
          summary: 'string',
          defaultValue: 'bottom'
        },
        defaultValue: 'bottom',
        category: 'NOT A PROP (documentation helpers)'
      }
    },

    showDots: {
      type: 'boolean',
      description: '**NOT A PROP**, just a documentation helper',
      table: {
        type: {
          summary: 'bool',
          defaultValue: false
        },
        defaultValue: false,
        category: 'NOT A PROP (documentation helpers)'
      }
    },
    showOnlyActiveDot: {
      type: 'boolean',
      description:
        '**NOT A PROP**, just a documentation helper. shows only the dot from which is the origin of the popover in the container',
      table: {
        type: {
          summary: 'bool',
          defaultValue: true
        },
        defaultValue: true,
        category: 'NOT A PROP (documentation helpers)'
      }
    }
  },
  args: {
    containerOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    popoverOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    popoverOriginHorizontal: 'left',
    popoverOriginVertical: 'top',
    containerOriginHorizontal: 'left',
    containerOriginVertical: 'bottom'
  }
};

const Dot = ({ style, bg = 'magenta', active }) => {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: 5,
        transform: 'translate(-50%, -50%)',
        transition: 'all .2s ease',
        zIndex: 100,
        backgroundColor: bg,
        position: 'absolute',
        display: active ? 'block' : 'none',
        ...style
      }}
    />
  );
};

const Dots = ({ bg, onlyActive, active }) => {
  return (
    <>
      <Dot
        style={{ top: 0, left: 0 }}
        bg={bg}
        active={!onlyActive || active === 'top left'}
      />
      <Dot
        style={{ top: 0, left: '50%' }}
        bg={bg}
        active={!onlyActive || active === 'top center'}
      />
      <Dot
        style={{ top: 0, left: '100%' }}
        bg={bg}
        active={!onlyActive || active === 'top right'}
      />
      <Dot
        style={{ top: '50%', left: 0 }}
        bg={bg}
        active={!onlyActive || active === 'center left'}
      />
      <Dot
        style={{ top: '50%', left: '50%' }}
        bg={bg}
        active={!onlyActive || active === 'center center'}
      />
      <Dot
        style={{ top: '50%', left: '100%' }}
        bg={bg}
        active={!onlyActive || active === 'center right'}
      />
      <Dot
        style={{ top: '100%', left: 0 }}
        bg={bg}
        active={!onlyActive || active === 'bottom left'}
      />
      <Dot
        style={{ top: '100%', left: '50%' }}
        bg={bg}
        active={!onlyActive || active === 'bottom center'}
      />
      <Dot
        style={{ top: '100%', left: '100%' }}
        bg={bg}
        active={!onlyActive || active === 'bottom right'}
      />
    </>
  );
};

const Template = args => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Popover
        {...args}
        containerOrigin={{
          horizontal: args.containerOriginHorizontal,
          vertical: args.containerOriginVertical
        }}
        popoverOrigin={{
          horizontal: args.popoverOriginHorizontal,
          vertical: args.popoverOriginVertical
        }}
        popoverContent={
          <div
            style={{
              position: 'relative'
            }} /* Popover container */
          >
            {
              args.showDots && !args.showOnlyActiveDot && (
                <Dots
                  onlyActive={args.showOnlyActiveDot}
                  active={`${args.containerOriginVertical} ${args.containerOriginHorizontal}`}
                />
              ) /* Dots just for documentation */
            }
            <PopoverItem onClick={() => alert('Popover Item clicked')}>
              PopoverItem component
            </PopoverItem>
            <Divider margin={0} />
            <PopoverItem onClick={() => alert('Popover Item clicked')}>
              PopoverItem component
            </PopoverItem>

            {args.popoverContent}
          </div>
        }
      >
        {
          args.showDots || args.showOnlyActiveDot ? (
            <Dots
              bg="MediumTurquoise"
              onlyActive={args.showOnlyActiveDot}
              active={`${args.containerOriginVertical} ${args.containerOriginHorizontal}`}
            />
          ) : null /* Dots just for documentation */
        }
        <Button margin="0" /* Children component */>Open</Button>
        {args.children}
      </Popover>
    </div>
  );
};

export const DefaultPopover = Template.bind({});
DefaultPopover.args = {
  width: 300
};
DefaultPopover.storyName = 'Default Popover';

export const CustomPopover = Template.bind({});
CustomPopover.args = {
  width: 200,
  popoverOriginHorizontal: 'right',
  containerOriginHorizontal: 'right'
};
CustomPopover.storyName = 'Custom Popover';

export const PopoverWithOwnState = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* ignore this */}
      <p
        style={{
          textAlign: 'center',
          marginBottom: 30,
          fontSize: 16,
          maxWidth: 500,
          color: 'red'
        }}
      >
        THIS STORY COMPONENT IS JUST TO DEMOSTRATE A POPOVER WITH OWN STATE.
        CANNOT INTERACT WITH STORYBOOK CONTROLS
      </p>
      {/* ignore this (end) */}

      <p
        onClick={() => setIsPopoverOpen(true)}
        style={{
          textAlign: 'center',
          maxWidth: 200,
          cursor: 'pointer',
          marginBottom: 30
        }}
      >
        Open popover since other component with own state. Click here!
      </p>

      <Popover
        popoverContent={
          <div>
            <PopoverItem onClick={() => alert('Popover Item clicked')}>
              PopoverItem component
            </PopoverItem>
            <Divider margin={0} />
            <PopoverItem onClick={() => alert('Popover Item clicked')}>
              PopoverItem component
            </PopoverItem>
            <Divider margin={0} />
            <PopoverItem onClick={() => setIsPopoverOpen(false)}>
              Close Popover
            </PopoverItem>
          </div>
        }
        width={300}
        open={isPopoverOpen}
        setIsOpen={setIsPopoverOpen}
      >
        <Button margin="0" /* Children component */>Open</Button>
      </Popover>
    </div>
  );
};

PopoverWithOwnState.storyName = 'Popover With Own State';
PopoverWithOwnState.parameters = {
  controls: { disable: true }
};
