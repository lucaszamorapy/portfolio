import { HttpResponse } from "../class/global";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface SendMailProps {
  email: string;
  phone: string;
  name: string;
  message: string;
}

const htpp = new HttpResponse();

export const sendMail = async (data: SendMailProps) => {
  try {
    const mailOptions = {
      from: data.email,
      to: process.env.SMTP_USER,
      subject: "Novo contato do portfólio",
      text: `
            Nome: ${data.name}
            Email: ${data.email}
            Telefone: ${data.phone}
            Mensagem: ${data.message}
        `,
      html: `
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefone:</strong> ${data.phone || "N/A"}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${data.message}</p>
        `,
    };
    const emailTransporter = await transporter.sendMail(mailOptions);
    return htpp.ok(emailTransporter, "E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return htpp.badRequest("Erro ao enviar o e-mail: " + (error as Error).message);
  }
}
