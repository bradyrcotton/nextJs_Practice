import type { NextApiRequest, NextApiResponse } from 'next'


import Stripe from 'stripe';
const stripe = new Stripe(process.env.customKey, {
  apiVersion: '2020-08-27'
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items:[{
      price: process.env.PRICE_ID,
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION-ID}`,
    cancel_url: `${req.headers.origin}/checkout`,

  })
  res.status(200).json({ seessionId: session.id })
}