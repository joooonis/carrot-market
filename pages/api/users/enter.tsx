import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import twilio from 'twilio';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + '';

  const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: { name: 'Anonymous', ...user },
        },
      },
    },
  });

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MYPHONE!,
      body: `Your login token is ${payload}.`,
    });
    console.log(message);
  }

  res.status(200).end();
}

export default withHandler('POST', handler);
