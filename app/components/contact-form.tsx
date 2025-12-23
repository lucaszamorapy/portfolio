"use client";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContact } from "../actions/contact";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().nonempty("O telefone é obrigatório."),
  email: z.string().email({
    message: "Digite um e-mail válido.",
  }),
  phone: z.string().nonempty("O telefone é obrigatório."),
  message: z.string().min(5, {
    message: "A mensagem deve possuir no mínimo 5 caracteres.",
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const formatPhone = (value: string) => {
    if (!value) return "";
    const digits = value.replace(/\D/g, "").slice(0, 11);

    // 11 dígitos = celular
    if (digits.length === 11) {
      return digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

    // 10 dígitos = fixo
    if (digits.length === 10) {
      return digits.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }

    if (digits.length <= 2) {
      return digits.replace(/(\d{0,2})/, "($1");
    }

    if (digits.length <= 6) {
      return digits.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    }

    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  };
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const res = await createContact(data);
      if (res.error) {
        console.error("Erro ao enviar o contato:", res.message);
        toast.error(res.message);
      } else {
        toast.success(res.message || "Contato enviado com sucesso!");
        form.reset();
      }
      setLoading(false);
    } catch (error) {
      console.error("Erro ao enviar o contato:", error);
      toast.error("Erro ao enviar o contato. Tente novamente mais tarde.");
      setLoading(false);
    }
  };
  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-white"
                    htmlFor="form-contact-name"
                  >
                    Nome
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-contact-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite seu nome"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-white"
                    htmlFor="form-contact-email"
                  >
                    E-mail
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-contact-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="seuemail@exemplo.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-white"
                    htmlFor="form-contact-phone"
                  >
                    Telefone ou Celular
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-contact-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="(00) 00000-0000"
                    value={formatPhone(field.value)}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-white"
                    htmlFor="form-contact-message"
                  >
                    Mensagem
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-contact-message"
                    placeholder="Digite sua mensagem aqui."
                    rows={6}
                    className="min-h-24 text-white resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button loading={loading} type="submit" form="form-contact">
            Enviar
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
