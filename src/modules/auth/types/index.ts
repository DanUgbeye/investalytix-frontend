export * from "./store.types.ts";

export type SignupData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AuthData = {
  token: string;
  expiresIn: number;
};
