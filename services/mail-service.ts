import nodemailer, { Transporter, TransportOptions } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SMTP_PORT: number;
      SMTP_HOST: string;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
    }
  }
}

async function sendEmail(to: any, link: any,) {
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? '',
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_AUTH,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_AUTH,
      to,
      subject: "http://localhost:5000",
      text: '',
      html: `<div><h1>Welcome</h1></div>`
    });
  } catch (error) {

  }

}

export { sendEmail };