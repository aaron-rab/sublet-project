import { UserSchema, NewUserSchema } from "./user-value-validation";

export type User = {
  id: number;
  username: string;
  email: string;
  hashedPassword: string;
};

export type NewUser = Omit<User, "id" | "creationDate">;

export function makeUserObject(data: unknown): User {
  return UserSchema.parse(data);
}

export function makeNewUserObject(data: unknown): NewUser {
  return NewUserSchema.parse(data);
}