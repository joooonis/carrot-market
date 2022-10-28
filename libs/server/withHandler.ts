import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = 'POST' | 'GET' | 'DELETE';

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as any)) {
      // as any : 'undefined' 형식은 'method' 형식에 할당할 수 없습니다.
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
