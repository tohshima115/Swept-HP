import { useEffect, useRef } from 'react';
import { Location } from 'react-router-dom';

// /member から /member/:slug への遷移、またはその逆は除外
function isMemberToMemberDetail(prev: string, next: string) {
  const memberRoot = /^\/member$/;
  const memberDetail = /^\/member\/[^/]+$/;
  return (
    (memberRoot.test(prev) && memberDetail.test(next)) ||
    (memberDetail.test(prev) && memberRoot.test(next)) ||
    (memberDetail.test(prev) && memberDetail.test(next))
  );
}

const useScrollToTop = (location: Location) => {
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const prev = prevPath.current;
    const next = location.pathname;
    if (!isMemberToMemberDetail(prev, next)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    prevPath.current = next;
  }, [location.pathname]);
};

export default useScrollToTop; 