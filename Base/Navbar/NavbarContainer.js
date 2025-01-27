import { useState } from 'react';
import { Nav, NavIconsContainer } from './navbarStyles';
import NavbarSearch from './NavbarSearch';
import Notifications from '../../../components/Notifications/Notifications';
import NavbarAvatar from './NavbarAvatar';
import NavbarResponsiveIcons from './NavbarResponsiveIcons';
import { useRouter } from 'next/router';
import { findRouteConfig } from '../../utils/findRoutConfig';

const NavbarContainer = ({
  setTheme,
  setIsSidebarOpen,
  isNotificationOpen,
  setIsNotificationOpen,
  userInfo,
  avatarPopover,
  notificationsLength
}) => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const routeConfig = findRouteConfig(router.asPath);

  if (!routeConfig?.hasNav) return true;

  return (
    <Nav>
      {routeConfig?.hasSearch && (
        <NavbarSearch
          open={isSearchOpen}
          toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        />
      )}

      <NavbarResponsiveIcons
        toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        hasBarIcon={routeConfig?.hasSidebar}
        hasSearchIcon={routeConfig?.hasSearch}
        setIsSidebarOpen={setIsSidebarOpen}
        notificationsLength={notificationsLength}
      />

      <NavIconsContainer>
        <Notifications
          showInResponsive={!routeConfig?.hasSidebar}
          isNotificationOpen={isNotificationOpen}
          setIsNotificationOpen={setIsNotificationOpen}
        />
        <NavbarAvatar
          setTheme={setTheme}
          avatarPopover={avatarPopover}
          userInfo={userInfo}
        />
      </NavIconsContainer>
    </Nav>
  );
};

export default NavbarContainer;
