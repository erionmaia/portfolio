export const dynamic = "force-dynamic";
export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message } = await req.json()

    await resend.emails.send({
      from: 'Erion Maia - Portofolio <contato@erionmaia.dev>',
      to: ['erionmaia@gmail.com'],
      subject: `Contato do site: ${name}`,
      replyTo: email,
      text: message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar mensagem.' }, { status: 500 })
  }
}