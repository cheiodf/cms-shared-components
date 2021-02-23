import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import getRole from '../utils/getRole';

/**
 * @returns {object} - role
 */
function useRole() {
  const [role, setRole] = useState();
  const cookies = parseCookies();

  useEffect(() => {
    setRole(getRole());
  }, [cookies]);

  return { role };
}

export default useRole;
