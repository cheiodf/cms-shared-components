import { parseCookies } from 'nookies';
import jwtDecode from 'jwt-decode';
import { findRouteConfig } from './findRoutConfig';

const getRole = () => {
  const cookies = parseCookies();
  if (cookies.token) {
    const { role } = jwtDecode(cookies.token, {
      payload: true
    });
    return role;
  }
};
export const getRouteRoles = (path, params) => {
  const nav = findRouteConfig(path);

  return nav;
};
export default getRole;
