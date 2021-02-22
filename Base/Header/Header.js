import {
  HeaderContainer,
  HeaderSubcontainer,
  HeaderRouteDataContainer,
  HeaderRow,
  HeaderButtonsContainer
} from './headerStyles';
import props from './headerProps';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Typography from '../Typography/Typography';
import Hidden from '../Hidden/Hidden';

const Header = ({ breadcrumbProps, buttons, title, children }) => (
  <HeaderContainer>
    <HeaderSubcontainer>
      <HeaderRow>
        <HeaderRouteDataContainer>
          <Typography color="#FFF" tag="h1" size={1.4}>
            {title}
          </Typography>

          {breadcrumbProps && (
            <Hidden down="sm">
              <Breadcrumb {...breadcrumbProps} />
            </Hidden>
          )}
        </HeaderRouteDataContainer>
        {buttons && <HeaderButtonsContainer>{buttons}</HeaderButtonsContainer>}
      </HeaderRow>
      {children}
    </HeaderSubcontainer>
  </HeaderContainer>
);

Header.propTypes = props;

export default Header;
