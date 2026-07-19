import { z } from "zod";

export const createUserSchema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 characters")
    .max(50),

  email: z
    .string()
    .email("Invalid email address"),
});