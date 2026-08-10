import { z } from 'zod';

export const emailSchema = z.object({
  nome: z.string().min(2, 'O nome precisa ter pelo menos 2 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  assunto: z.string().min(3, 'O assunto precisa ter pelo menos 3 caracteres'),
  mensagem: z.string().min(10, 'A mensagem precisa ter pelo menos 10 caracteres'),
});

export type EmailSchema = z.infer<typeof emailSchema>;