import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import getRole from '../utils/getRole';

const useHasRoleAccess = routeConfig => {
  const router = useRouter();
  const cookies = parseCookies();

  useEffect(() => {
    if (cookies.token && router.route !== '/') {
      const role = getRole();
      if (!routeConfig?.roles?.includes(role)) router.push('/dashboard');
    }
  }, [routeConfig, router.route]);

  return null;
};

export default useHasRoleAccess;
