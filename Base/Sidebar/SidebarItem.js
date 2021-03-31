import { memo } from 'react';
import Link from 'next/link';
import {
  SidebarItemContainer,
  SidebarItemIcon,
  SidebartItemBadgeContainer
} from './sidebarStyles';
import Typography from '../Typography/Typography';
import Badge from '../Badge/Badge';
import Hidden from '../Hidden/Hidden';

const SidebarItem = ({
  icon: Icon,
  path,
  title,
  active,
  closeSidebar,
  onClick,
  isExternal,
  badge,
  hiddenProps
}) => {
  const Container = ({ children }) =>
    path ? (
      <Link href={path}>
        <a target={isExternal ? '_blank' : null}>{children}</a>
      </Link>
    ) : (
      <>{children}</>
    );

  const handleOnClick = () => {
    onClick && onClick();
    closeSidebar();
  };

  return (
    <Hidden {...hiddenProps}>
      <li>
        <Container>
          <SidebarItemContainer
            active={active}
            onClick={handleOnClick}
            badge={badge}
          >
            <SidebarItemIcon>
              <Icon width="100%" color="#8898AA" />
            </SidebarItemIcon>
            <Typography color="#8898AA" weight="semi-bold" size={0.875}>
              {title}
            </Typography>
            <SidebartItemBadgeContainer>
              <Badge content={badge} variant="danger" size="xs" />
            </SidebartItemBadgeContainer>
          </SidebarItemContainer>
        </Container>
      </li>
    </Hidden>
  );
};

export default memo(SidebarItem);
