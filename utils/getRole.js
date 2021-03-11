import { parseCookies } from 'nookies';
import jwtDecode from 'jwt-decode';
import { navigationFlat } from './navigationFlat';

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
  const nav = navigationFlat.find(route => {
    const a = params && Object.keys(params)[0]; // slug
    let newPath = route.path;
    if (a) newPath = route.path.replace(`[${a}]`, params[a]) + '/';
    else newPath = route.path + '/';
    return newPath === path;
  });
  return nav;
};
export default getRole;
