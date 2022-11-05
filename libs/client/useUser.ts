import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function useUser() {
  const router = useRouter();
  const { data, error } = useSWR('/api/users/me');

  useEffect(() => {
    if (data && !data.ok && router.pathname != '/enter') {
      // 만약 data = { ok:false } 응답을 받으면 로그인페이지로
      router.replace('/enter');
    }
  }, [router, data]);
  return { user: data?.profile, isLoading: !data && !error };
}
