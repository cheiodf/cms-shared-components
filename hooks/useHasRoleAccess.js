import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

const useHasRoleAccess = routeConfig => {
  const router = useRouter();
  const cookies = parseCookies();

  useEffect(() => {
    if (cookies.token && router.route !== '/') {
      const { role } = jwtDecode(cookies.token, {
        payload: true
      });
      if (!routeConfig?.roles?.includes(role)) router.push('/dashboard');
    }
  }, [routeConfig, router.route]);

  return null;
};

export default useHasRoleAccess;
