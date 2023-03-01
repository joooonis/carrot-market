import { NextApiRequest, NextApiResponse } from 'next';
export function middleware(req: NextApiRequest, res: NextApiResponse) {
  console.log('global middleware!');
}
