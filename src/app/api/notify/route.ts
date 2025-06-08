export const dynamic = "force-dynamic";
export const runtime = 'edge';

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Coletar informações do request
    const userAgent = request.headers.get("user-agent") || "N/A";
    const language = request.headers.get("accept-language") || "N/A";
    const referrer = request.headers.get("referer") || "N/A";
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "N/A";
    const date = new Date();

    // Consultar API de geolocalização
    let location = "N/A";
    try {
      if (ip !== "N/A" && ip !== "::1" && ip !== "127.0.0.1") {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        const geoData = await geoRes.json();
        if (geoData.status === "success") {
          location = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
        }
      }
    } catch (e) {
      location = "N/A";
    }

    // GIF de congratulações
    const gifUrl = "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif";

    // Montar HTML do email
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>🎉 Parabéns, você teve um novo acesso ao seu portfólio!</h2>
        <img src="${gifUrl}" alt="Congratulations" style="width:300px;max-width:100%;border-radius:8px;margin:16px 0;" />
        <p>Você está no caminho certo, continue melhorando.</p>
        <h3>Informações do acesso:</h3>
        <ul>
          <li><b>Data/Hora:</b> ${date.toLocaleString()}</li>
          <li><b>IP:</b> ${ip}</li>
          <li><b>Localização:</b> ${location}</li>
          <li><b>User-Agent:</b> ${userAgent}</li>
          <li><b>Idioma do navegador:</b> ${language}</li>
          <li><b>Referência (referrer):</b> ${referrer}</li>
        </ul>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "erionmaia@gmail.com",
      subject: "Novo acesso ao seu portfólio!",
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
} 