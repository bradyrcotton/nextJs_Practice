import {loadStripe} from '@stripe/stripe-js';
import Image from 'next/image'
import IGSD from '../public/IGSD.jpg'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout() {
    const handleClick = async (event) => {
        const {sessionId} = await fetch('/api/checkout/session', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({quantity: 1})
        }).then(res => res.json())
        const stripe = await stripePromise;
        const {error} = await stripe.redirectToCheckout({
            sessionId
        })
    }
    
  return (
    <div>
      <h1>Sandbox Next/Stripe Checkout</h1>
      <Image src={IGSD}/>
      <h1>$20.00</h1>
      <button role='link' onClick={handleClick}>
          Buy Now 
      </button>
    </div>
  );
}
