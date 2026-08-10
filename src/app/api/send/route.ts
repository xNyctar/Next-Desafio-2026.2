import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  nome: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Endereço de e-mail inválido"),
  assunto: z.string().min(3, "O assunto deve ter no mínimo 3 caracteres"),
  mensagem: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { nome, email, assunto, mensagem } = validation.data;

    const { error } = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: ["agostinhomurilo5@gmail.com"],
      replyTo: email,
      subject: `[Contato Site] ${assunto}`,
      html: `<p><strong>Nome:</strong> ${nome}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensagem:</strong> ${mensagem}</p>`,
    });

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}