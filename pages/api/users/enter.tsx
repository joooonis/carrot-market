import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/server/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(401).end();
  }

  console.log(req.body);
  // res.send({ 200: 'ok' });
  res.status(200).end();
}
