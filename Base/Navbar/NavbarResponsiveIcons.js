import {
  NavResponsiveIconContainer,
  NavResponsiveIconsContainer
} from './navbarStyles';
import { BarsIcon, SearchIcon } from '../../../components/Icons';
import Hidden from '../Hidden/Hidden';
import Badge from '../Badge/Badge';

const NavbarResponsiveIcons = ({
  toggleSearch,
  hasSearchIcon,
  hasBarIcon,
  setIsSidebarOpen
}) => {
  return (
    <Hidden up="sm">
      <NavResponsiveIconsContainer>
        {hasBarIcon && (
          <NavResponsiveIconContainer onClick={() => setIsSidebarOpen(true)}>
            <Badge content={9} variant="danger" size="xs">
              <BarsIcon width="20" color="#fff" />
            </Badge>
          </NavResponsiveIconContainer>
        )}

        {hasSearchIcon && (
          <NavResponsiveIconContainer onClick={toggleSearch}>
            <SearchIcon width="20" color="#fff" />
          </NavResponsiveIconContainer>
        )}
      </NavResponsiveIconsContainer>
    </Hidden>
  );
};

export default NavbarResponsiveIcons;
