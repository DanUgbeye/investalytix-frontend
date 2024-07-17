export type ServerUserData = {
  _id: string;
  googleId?: string;
  email: string;
  firstname: string;
  lastname: string;
  emailVerified: boolean;
  enabled2FA: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserData = {
  id: string;
  googleId?: string;
  email: string;
  firstname: string;
  lastname: string;
  emailVerified: boolean;
  enabled2FA: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserUpdate = Pick<UserData, "email" | "firstname" | "lastname">;
