export type SignupData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  hearAboutUs: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AuthData = {
  token: string;
  /** auth expiry time in milliseconds  */
  expiresIn: number;
};
