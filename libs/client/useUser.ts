import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function useUser() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const router = useRouter();

  const { data, error, mutate } = useSWR('/api/users/me', fetcher);
  return data;
}
