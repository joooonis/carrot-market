import { withIronSessionApiRoute } from 'iron-session/next/dist';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'carrotsession',
  password: 'c2w9DeEw7GYDT6iRkVQ4MPd3nAqtytRh',
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
