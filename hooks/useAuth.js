import nookies from 'nookies';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getRouteRoles } from '../utils/getRole';

// RINA = Redirect If Not Authenticated
// RIIA = Redirect If Is Authenticated

function useAuth(action = 'RINA', roles = false) {
  const { token, userInfo } = nookies.get();
  const router = useRouter();

  useEffect(() => {
    console.log(window.location.href, 'useAuth');
    if (roles) {
      const user = JSON.parse(userInfo);
      let path = router.pathname;
      if (!path.endsWith('/')) path += '/';

      if (!getRouteRoles(path)?.roles.includes(user.role))
        router.push('/dashboard');
    }

    if (!token && action === 'RINA') router.push('/');
    else if (token && action === 'RIIA') router.push('/dashboard');
  }, [token, action, router, roles, getRouteRoles]);

  return {
    isAuth: !!token
  };
}

export default useAuth;
