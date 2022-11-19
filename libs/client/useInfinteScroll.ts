import { useEffect, useState } from 'react';

export function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  function handleScroll() {
    if (window.scrollY + window.innerHeight === document.body.offsetHeight) {
      setPage((p) => p + 1);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return page;
}
