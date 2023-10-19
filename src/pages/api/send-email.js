import { render } from '@react-email/render';

import { sendEmail } from '@/lib/email';
import MailTemplate from '@/components/mailTemplate';

export default async function handler(req, res) {
  const { name, email, query } = req.query;
  console.log('req.query =>', req.query, process.env.SMTP_TO_EMAIL);

  await sendEmail({
    to: process.env.SMTP_TO_EMAIL,
    subject: `${name} wants to contact you!`,
    html: render(MailTemplate({ name, email, query })),
  });

  return res.status(200).json({ message: 'Success' });
}
