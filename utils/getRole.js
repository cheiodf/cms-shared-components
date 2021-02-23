import { parseCookies } from 'nookies';
import jwtDecode from 'jwt-decode';

const getRole = () => {
  const cookies = parseCookies();

  if (cookies.token) {
    const { role } = jwtDecode(cookies.token, {
      payload: true
    });

    return role;
  }
};

export default getRole;
