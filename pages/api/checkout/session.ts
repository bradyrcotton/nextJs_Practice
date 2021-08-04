import type { NextApiRequest, NextApiResponse } from 'next'


import Stripe from 'stripe';
const stripe = new Stripe(process.env.customKey, {
  apiVersion: '2020-08-27'
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['cards'],
    line_items:[{
      price: '{{PRICE_ID}}',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',

  })
  res.status(200).json({ name: 'John Doe' })
}