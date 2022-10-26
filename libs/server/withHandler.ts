import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  method: 'POST' | 'GET' | 'DELETE';
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({
  method,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    // private한 api요청이고 로그인 한 유저가 아니라면
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'plz log in.' });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
