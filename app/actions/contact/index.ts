"use server";

import { prisma } from "@/app/lib/db";

interface CreateContactParams {
  contact_id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: Date;
}

export const createContact = async (
  data: CreateContactParams
) => {
  try {
    const contact = await prisma.contacts.create({
      data,
    });

    return contact;
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    throw new Error(
      "Erro ao enviar o seu contato: " + (error as Error).message
    );
  }
};
