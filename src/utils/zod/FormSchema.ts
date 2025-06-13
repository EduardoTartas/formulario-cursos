import { z } from "zod/v4";

export const FormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z.email("Por favor, insira um endereço de e-mail válido."),
    sex: z.string().min(1, "Por favor, selecione uma opção para o sexo."),
    course: z.string().min(1, "Por favor, selecione um curso."),
    observation: z.string().max(500, "As observações devem ter no máximo 500 caracteres.").optional(),
});
