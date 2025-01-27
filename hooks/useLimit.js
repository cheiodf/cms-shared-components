import { useState } from 'react';

function useLimit() {
  const [limit, setLimit] = useState(
    process.browser
      ? parseInt(window.localStorage.getItem('tableLimit')) || 10
      : 10
  );
  return { limit, setLimit };
}

export default useLimit;
