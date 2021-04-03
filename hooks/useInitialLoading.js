import { useEffect, useState } from 'react';

function useLimit(loading) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [startFistReq, setStartFistReq] = useState(false);

  useEffect(() => {
    loading && setStartFistReq(true);
  }, [loading]);

  useEffect(() => {
    !loading && initialLoading && startFistReq && setInitialLoading(false);
  }, [loading, initialLoading, startFistReq]);

  return [initialLoading];
}

export default useLimit;
