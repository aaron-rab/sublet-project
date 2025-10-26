import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  username: z.string().min(1, "Username is required").max(100, "Username is too long"),
  email: z.email("Invalid email address"),
  hashedPassword: z.string().min(8, "Password must be at least 8 characters long"),
  creationDate: z.coerce.date(),
});

export const NewUserSchema = UserSchema.omit({ id: true, creationDate: true });
