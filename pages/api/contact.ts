import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey('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');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, info, name } = req.body
  const msg = {
    to: 'u1.boodh@gmail.com',
    from: email,
    subject:"Getting in touch",
    name,
    text: info,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}