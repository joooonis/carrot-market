import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';
import { withApiSession } from '@libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  // 서버 입장에서는 session에 저장이 되어있는 것
  // 아제 user를 조회합닏다.
  const {
    session: { user },
  } = req;

  const reviews = await client.review.findMany({
    where: { createdForId: user?.id },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  res.json({
    ok: true,
    reviews,
  });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
