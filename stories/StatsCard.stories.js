import Grid from '../Base/Grid/Grid';
import StatsCard from '../../components/Stats/Card/StatsCard';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Stats/Card',
  component: StatsCard,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'danger']
      },
      description: 'Stats card icon color',
      type: {
        summary: 'info | success | warning | danger'
      },
      defaultValue: 'info',
      table: {
        defaultValue: { summary: 'info' }
      }
    },
    title: {
      control: 'text',
      description: 'Stats card title',
      type: {
        summary: 'string',
        required: true
      }
    },
    content: {
      control: 'text',
      description: 'Stats card main fact',
      type: {
        summary: 'string | number',
        required: true
      },
      table: {
        defaultValue: { summary: 0 }
      }
    },
    percentage: {
      control: 'text',
      description: 'Stats card percentage',
      type: {
        summary: 'number'
      }
    },
    percentageText: {
      control: 'text',
      description: 'Stats card percentage small text',
      type: {
        summary: 'string'
      }
    }
  },
  args: {
    percentageText: 'Since last month'
  }
};

const Template = args => <StatsCard {...args}></StatsCard>;

export const CardInfo = Template.bind({});
CardInfo.args = {
  variant: 'info',
  title: 'users',
  content: 324,
  percentage: 3.0
};
CardInfo.storyName = 'Stats Card Info';

export const CardSuccess = Template.bind({});
CardSuccess.args = {
  variant: 'success',
  title: 'users',
  content: 324,
  percentage: 3.0
};
CardSuccess.storyName = 'Stats Card Success';

export const CardWarning = Template.bind({});
CardWarning.args = {
  variant: 'warning',
  title: 'users',
  content: 324,
  percentage: 3.0
};
CardWarning.storyName = 'Stats Card Warning';

export const CardDanger = Template.bind({});
CardDanger.args = {
  variant: 'danger',
  title: 'users',
  content: 324,
  percentage: 3.0
};
CardDanger.storyName = 'Stats Card Danger';

export const CardsWithGrid = () => (
  <Grid cols="repeat(auto-fit, minmax(300px, 1fr))" gap={1}>
    <StatsCard
      title="new users"
      content="5425"
      percentage={32.5}
      percentageText="Since last month"
    />
    <StatsCard
      title="new users"
      content="5234"
      percentage={-5.25}
      variant="success"
      percentageText="Since last month"
    />
    <StatsCard
      title="new users"
      content="3425"
      percentage={13.3}
      variant="warning"
      percentageText="Since last month"
    />
    <StatsCard
      title="new users"
      content="5245"
      percentage={-7.8}
      variant="danger"
      percentageText="Since last month"
    />
  </Grid>
);
CardsWithGrid.args = {
  title: 'users',
  content: 324,
  percentage: 3.0
};
CardsWithGrid.storyName = 'Stats Cards With Grid';
CardsWithGrid.parameters = {
  controls: { disable: true }
};
