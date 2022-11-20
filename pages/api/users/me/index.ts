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
  // 여기서 user를 조회합니다.

  if (req.method === 'GET') {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });

    res.json({
      ok: true,
      profile,
    });
  }

  if (req.method === 'POST') {
    const {
      session: { user },
      body: { email, phone, name, avatarId },
    } = req;

    const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (email && email !== currentUser?.email) {
      const alreadyExist = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
          },
        }),
      );
      if (alreadyExist) {
        return res.json({
          ok: false,
          error: 'email already exist.',
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: { email },
      });
      res.json({
        ok: true,
      });
    }

    if (phone && phone !== currentUser?.phone) {
      const alreadyExist = Boolean(
        await client.user.findUnique({
          where: {
            phone,
          },
          select: {
            id: true,
          },
        }),
      );
      if (alreadyExist) {
        return res.json({
          ok: false,
          error: 'phone already exist.',
        });
      }
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: { phone },
      });
    }
    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: { name },
      });
    }

    if (avatarId) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: { avatar: avatarId },
      });
    }
    res.json({
      ok: true,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
