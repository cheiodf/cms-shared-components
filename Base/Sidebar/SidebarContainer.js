import { memo, forwardRef } from 'react';
import {
  SidebarWrapper,
  SidebarCrossIconContainer,
  SidebarLogoContainer,
  SidebarLogo,
  SidebarOverlay,
  SidebarList
} from './sidebarStyles';
import { SideBarProps } from './sidebarProps';
import SidebarItem from './SidebarItem';
import { navigation } from '../../../utils/constants/navigation';
import { navigationFlatFunction } from '../../utils/navigationFlat';
import { useRouter } from 'next/router';
import { BellIcon, CrossIcon } from '../../../components/Icons';
import Divider from '../Divider/Divider';
import Link from 'next/link';
import { findRouteConfig } from '../../utils/findRoutConfig';

const SidebarContainer = forwardRef(
  (
    {
      isSidebarOpen,
      setIsSidebarOpen,
      setIsNotificationOpen,
      children,
      SidebarExtraItems,
      userRole,
      logo = 'http://via.placeholder.com/125',
      home = '/dashboard',
      notificationsLength
    },
    ref
  ) => {
    const router = useRouter();

    const routeConfig = findRouteConfig(router.asPath);

    if (!routeConfig?.hasSidebar) return true;

    const isSidebarItemVisible = route => {
      const isRoleValid = route?.roles.includes(userRole);
      const isVisible = route.isInSidebar;
      const isEnvironmentValid = route.enviroments
        ? route.enviroments.includes(process.env.NODE_ENV)
        : true;

      return isRoleValid && isVisible && isEnvironmentValid;
    };

    const navigationFilter = navigation.filter(route =>
      isSidebarItemVisible(route)
    );

    return (
      <>
        <SidebarOverlay
          isSidebarOpen={isSidebarOpen}
          onClick={() => setIsSidebarOpen(false)}
        />
        <SidebarWrapper isSidebarOpen={isSidebarOpen} ref={ref}>
          <SidebarCrossIconContainer onClick={() => setIsSidebarOpen(false)}>
            <CrossIcon width="14" color="#8898AA" />
          </SidebarCrossIconContainer>

          <SidebarLogoContainer>
            <Link href={home}>
              <SidebarLogo src={logo} onClick={() => setIsSidebarOpen(false)} />
            </Link>
            <Divider fullWidth={false} size={1.5} />
          </SidebarLogoContainer>

          <SidebarList>
            {navigationFilter.map(route => {
              const isSubPath = navigationFlatFunction(route.subPaths).some(
                subPath => subPath.path === router.pathname
              );

              return (
                <SidebarItem
                  key={route.title}
                  path={route.path}
                  title={route.title}
                  icon={route.icon}
                  active={route.path === router.pathname || isSubPath}
                  closeSidebar={() => setIsSidebarOpen(false)}
                />
              );
            })}
            <SidebarItem
              title="Notificaciones"
              icon={BellIcon}
              closeSidebar={() => setIsSidebarOpen(false)}
              active={notificationsLength}
              badge={notificationsLength}
              hiddenProps={{ up: 'sm' }}
              onClick={() => setIsNotificationOpen(true)}
            />
            {children}
          </SidebarList>
          {SidebarExtraItems}
        </SidebarWrapper>
      </>
    );
  }
);

SidebarContainer.propTypes = SideBarProps;
SidebarContainer.displayName = 'SidebarContainer';

export default memo(SidebarContainer);
