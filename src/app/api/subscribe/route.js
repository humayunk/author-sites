import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const API_KEY = process.env.CONVERTKIT_API_KEY;
  const API_SECRET = process.env.CONVERTKIT_API_SECRET;
  const FORM_ID = process.env.CONVERTKIT_FORM_ID; // You'll need to create a form in ConvertKit and use its ID

  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_SECRET}`,
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email: email,
      }),
    });

    if (!response.ok) {
      throw new Error('Subscription to ConvertKit failed');
    }

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error subscribing to ConvertKit:', error);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
