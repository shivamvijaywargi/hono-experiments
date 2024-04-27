import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be atleast 8 characters long"),
  rememberMe: z.boolean().default(false),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
