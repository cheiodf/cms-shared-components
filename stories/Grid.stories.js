import Grid from '../Base/Grid/Grid';
import GridItem from '../Base/Grid/GridItem';
import Paper from '../Base/Paper/Paper';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    cols: {
      control: 'text',
      description: 'Number of columns ',
      type: { summary: 'string | number' },
      table: {
        category: 'Grid',
        defaultValue: { summary: 12 }
      }
    },
    gap: {
      control: 'number',
      description: 'Grid gap. The measure is in rem',
      type: { summary: 'number' },
      table: {
        category: 'Grid'
      }
    },
    rowGap: {
      control: 'number',
      description: 'Grid row gap. The measure is in rem',
      type: { summary: 'number' },
      table: {
        category: 'Grid'
      }
    },
    columnGap: {
      control: 'number',
      description: 'Grid column gap. The measure is in rem',
      type: { summary: 'number' },
      table: {
        category: 'Grid'
      }
    },

    xs: {
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least xs, that is, from xs up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the Grid component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number | string, gap: number, columnGap: number, rowGap: number})'
      },
      table: {
        category: 'Grid'
      }
    },
    sm: {
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least sm, that is, from sm up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the Grid component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number | string, gap: number, columnGap: number, rowGap: number})'
      },
      table: {
        category: 'Grid'
      }
    },
    md: {
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least md, that is, from md up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the Grid component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number | string, gap: number, columnGap: number, rowGap: number})'
      },
      table: {
        category: 'Grid'
      }
    },
    lg: {
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least lg, that is, from lg up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the Grid component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number | string, gap: number, columnGap: number, rowGap: number})'
      },
      table: {
        category: 'Grid'
      }
    },
    xl: {
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least md, that is, from md up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the Grid component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number | string, gap: number, columnGap: number, rowGap: number})'
      },
      table: {
        category: 'Grid'
      }
    },

    // item
    itemCols: {
      name: 'cols',
      control: 'number',
      description: 'Number of columns of the item',
      type: { summary: 'number' },
      table: {
        category: 'Grid item'
      }
    },
    itemRows: {
      name: 'rows',
      control: 'number',
      description: 'Number of rows of the item',
      type: { summary: 'string | number' },
      table: {
        category: 'Grid item'
      }
    },
    itemColStart: {
      name: 'colStart',
      control: 'number',
      description: 'column in which item starts',
      type: { summary: 'number' },
      table: {
        category: 'Grid item'
      }
    },
    itemRowStart: {
      name: 'rowStart',
      control: 'number',
      description: 'row in which item starts',
      type: { summary: 'number' },
      table: {
        category: 'Grid item'
      }
    },
    itemOrder: {
      name: 'order',
      control: 'number',
      description: 'Order of the item',
      type: { summary: 'number' },
      table: {
        category: 'Grid item',
        defaultValue: { summary: 0 }
      }
    },
    itemXs: {
      name: 'xs',
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least xs, that is, from xs up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the GridItem component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number, rows: number, colStart: number, rowStart: number, order: number})'
      },
      table: {
        category: 'Grid item'
      }
    },
    itemSm: {
      name: 'sm',
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least sm, that is, from sm up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the GridItem component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number, rows: number, colStart: number, rowStart: number, order: number})'
      },
      table: {
        category: 'Grid item'
      }
    },
    itemMd: {
      name: 'md',
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least md, that is, from md up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the GridItem component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number, rows: number, colStart: number, rowStart: number, order: number})'
      },
      table: {
        category: 'Grid item'
      }
    },
    itemLg: {
      name: 'lg',
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least lg, that is, from lg up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the GridItem component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number, rows: number, colStart: number, rowStart: number, order: number})'
      },
      table: {
        category: 'Grid item'
      }
    },
    itemXl: {
      name: 'xl',
      control: 'object',
      description:
        'The value of this prop will be applied when the width of the screen is at least xl, that is, from xl up. This prop can be an object, a string or a number. If the value of this prop is a string or a number, it will be taken into account only for the prop cols. In case of being an object, the possible keys are all the props of the GridItem component',
      type: {
        summary: 'number | string | object',
        detail:
          'number | string | object ({cols: number, rows: number, colStart: number, rowStart: number, order: number})'
      },
      table: {
        category: 'Grid item'
      }
    }
  },
  args: {
    cols: 12,
    gap: 0.5
  }
};

const getGridProps = props =>
  Object.keys(props)
    ?.filter(key => !key.startsWith('item'))
    ?.reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});

const getGridItemProps = props =>
  Object.keys(props)
    .filter(key => key.startsWith('item'))
    .reduce((obj, key) => {
      obj[
        key.replace('item', '').charAt(0).toLowerCase() +
          key.replace('item', '').slice(1)
      ] = props[key];
      return obj;
    }, {});

const Template = args => {
  const gridProps = getGridProps(args);
  const gridItemProps = getGridItemProps(args);

  return (
    <Grid {...gridProps}>
      {args.children || (
        <>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">1</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">2</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">3</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">4</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">5</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">6</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">7</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">8</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">9</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">10</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">11</Paper>
          </GridItem>
          <GridItem {...gridItemProps}>
            <Paper padding="1rem 2rem">12</Paper>
          </GridItem>
        </>
      )}
    </Grid>
  );
};

export const GridComponent = Template.bind({});
GridComponent.args = {
  itemCols: 2
};
GridComponent.storyName = 'Grid';

// examples

export const GridCustomColumns = Template.bind({});
GridCustomColumns.args = {
  cols: 6,
  itemCols: 3
};

GridCustomColumns.storyName = 'Grid Custom Columns';

export const GridResponsive = Template.bind({});
GridResponsive.args = {
  cols: 1,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12
};

GridResponsive.storyName = 'Grid Responsive by container cols';

export const GridResponsiveAuto = Template.bind({});
GridResponsiveAuto.args = {
  cols: 'repeat(auto-fill, minmax(200px, 1fr))'
};

GridResponsiveAuto.storyName = 'Grid Responsive automatic';

export const GridResponsiveItem = Template.bind({});
GridResponsiveItem.args = {
  cols: 12,
  itemCols: 12,
  itemXs: 12,
  itemSm: 6,
  itemMd: 3,
  itemLg: 4,
  itemXl: 1
};

GridResponsiveItem.storyName = 'Grid Responsive by item cols';

export const GridGap = Template.bind({});
GridGap.args = {
  cols: 'repeat(auto-fill, minmax(200px, 1fr))',
  columnGap: 1,
  rowGap: 4
};

GridGap.storyName = 'Grid Gap';

export const GridCustomItem = args => {
  const gridProps = getGridProps(args);
  const gridItemProps = getGridItemProps(args);

  return (
    <Template {...gridProps}>
      <GridItem>
        <Paper padding="1rem 2rem">1</Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">2</Paper>
      </GridItem>
      <GridItem {...gridItemProps}>
        <Paper padding="1rem 2rem" bg="#28CEBA">
          3 - ITEM MANIPULATED
        </Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">4</Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">5</Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">6</Paper>
      </GridItem>
    </Template>
  );
};
GridCustomItem.args = {
  cols: 12,
  itemCols: 5,
  itemColStart: 2,
  itemRowStart: 1
};
GridCustomItem.storyName = 'Grid Custom Item';

export const GridCustomItemTwo = args => {
  const gridProps = getGridProps(args);
  const gridItemProps = getGridItemProps(args);

  return (
    <Template {...gridProps}>
      <GridItem {...gridItemProps}>
        <Paper padding="1rem 2rem" bg="#28CEBA">
          ITEM - ITEM MANIPULATED
        </Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">ITEM</Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">ITEM</Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">ITEM</Paper>
      </GridItem>
      <GridItem>
        <Paper padding="1rem 2rem">ITEM</Paper>
      </GridItem>
    </Template>
  );
};
GridCustomItemTwo.args = {
  cols: 1,
  gap: 2,
  md: 3,
  itemMd: { order: -1 },
  itemRows: 2,
  itemOrder: 1
};
GridCustomItemTwo.storyName = 'Grid Custom Item 2';
