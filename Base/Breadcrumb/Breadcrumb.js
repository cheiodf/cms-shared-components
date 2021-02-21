import { memo } from 'react';
import { props, defaultProps } from './breadcrumbProps';
import { BreacrumbList } from './breadcrumbStyles';
import Paper from '../Paper/Paper';
import BreadcrumbLink from './BreadcrumbLink';
// icons
import { HomeIcon } from '../../Icons';

const Breadcrumb = ({ links, home }) => {
  return (
    <div style={{ width: 'fit-content' }}>
      <Paper radius={10} bg="var(--breadcrumb-bg)">
        <BreacrumbList>
          <BreadcrumbLink path={home} icon={HomeIcon} active={true} />
          {links.length
            ? links.map((link, i) => (
                <BreadcrumbLink
                  key={i}
                  {...link}
                  active={i + 1 !== links.length}
                />
              ))
            : null}
        </BreacrumbList>
      </Paper>
    </div>
  );
};

Breadcrumb.propTypes = props;
Breadcrumb.defaultProps = defaultProps;

export default memo(Breadcrumb);
