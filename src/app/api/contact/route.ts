export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message } = await req.json()

    const result = await resend.emails.send({
      from: 'Erion Maia - Portofolio <contato@erionmaia.dev>',
      to: ['erionmaia@gmail.com'],
      subject: `Contato do site: ${name}`,
      replyTo: 'contato@erionmaia.dev',
      text: `Olá Erion,
            Você recebeu um contato através do seu site.
            ${name} <${email}> enviou a seguinte mensagem:
            ${message}
      `,
    })

    if (result.error) {
      console.log('Result error', result);
      return NextResponse.json({ error: 'Erro ao enviar mensagem.' }, { status: 500 })
    };

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar mensagem.' }, { status: 500 })
  }
}