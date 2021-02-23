import { parseCookies } from 'nookies';
import jwtDecode from 'jwt-decode';
const cookies = parseCookies();

const getRole = () => {
  const { role } = jwtDecode(cookies?.token, {
    payload: true
  });

  return role;
};

export default getRole;
