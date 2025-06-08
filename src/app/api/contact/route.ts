export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not set' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Erion Maia <contato@erionmaia.dev>',
        to: ['erionmaia@gmail.com'],
        subject: `Contato do site: ${name}`,
        html: `
          <p>Nome: ${name}</p>
          <p>Email: ${email}</p>
          <p>Mensagem: ${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.message || 'Erro ao enviar mensagem.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar mensagem.' }, { status: 500 })
  }
}