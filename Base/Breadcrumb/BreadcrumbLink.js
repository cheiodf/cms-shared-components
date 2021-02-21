import { memo } from 'react';
import Link from 'next/link';
import Typography from '../Typography/Typography';
import {
  BreadcrumbItemContainer,
  BreadcrumbLinkSubItem
} from './breadcrumbStyles';

const BreadcrumbLink = ({ title, path, icon: Icon, active }) => {
  return (
    <>
      <BreadcrumbItemContainer active={active}>
        <Typography
          href={path || '/'}
          tag={active && path ? Link : 'p'}
          {...(process.env.STORYBOOK && active && path && { prefetch: false })} // to solve storybook error
        >
          <BreadcrumbLinkSubItem>
            {Icon && (
              <Icon
                color={`var(--breadcrumb-${active ? 'primary' : 'secondary'})`}
                width="16"
              />
            )}
            <Typography
              tag="span"
              size={1}
              color={`var(--breadcrumb-${active ? 'primary' : 'secondary'})`}
            >
              {title}
            </Typography>
          </BreadcrumbLinkSubItem>
        </Typography>
      </BreadcrumbItemContainer>
      <Typography color="var(--breadcrumb-secondary)">/</Typography>
    </>
  );
};

export default memo(BreadcrumbLink);
