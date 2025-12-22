"use server"
import { Contacts } from "@/app/generated/prisma/client";
import { prisma } from "@/app/lib/db";
//import { createContactMock } from "@/app/mockup/contact";


export const createContact = async (data: Contacts) => {
  //const data = createContactMock
  try {
    const contact = await prisma.contacts.create({
      data,
    });
    return contact;
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    throw new Error("Erro ao enviar o seu contato: " + (error as Error).message);
  }
}