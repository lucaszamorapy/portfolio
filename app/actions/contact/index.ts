"use server";
import { HttpResponse, IHttpResponse } from "@/app/class/global";
import { prisma } from "@/app/lib/db";
import { sendMail, SendMailProps } from "@/app/lib/email.server";

interface CreateContactParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const htpp = new HttpResponse();

export const createContact = async (
  data: CreateContactParams
): Promise<IHttpResponse<CreateContactParams | null>> => {
  let res: IHttpResponse<CreateContactParams | null>;
  try {
    const emailExists = await prisma.contacts.findFirst({
      where: {
        email: data.email
      }
    })
    if (emailExists) {
      res = htpp.badRequest("Este e-mail já foi utilizado para entrar em contato.");
    } else {
      const contact = await prisma.contacts.create({
        data
      });
      const emailData: SendMailProps = { name: data.name, email: data.email, phone: data.phone, message: data.message };
      const email = await sendMail(emailData)
      if (email.error) {
        res = htpp.badRequest(`${email.message}. O contato foi salvo, mas o e-mail não pôde ser enviado.`);
      } else {
        res = htpp.ok<CreateContactParams>(contact, email.message);
      }
    }
    return res
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    return htpp.badRequest("Erro ao criar o seu contato: " + (error as Error).message);
  }
};
