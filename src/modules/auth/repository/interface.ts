import { AuthData, LoginData, SignupData } from "../auth.types";

export interface IAuthRepository {
  signup(data: SignupData): Promise<{ auth: AuthData; user: any }>;
  login(data: LoginData): Promise<{ auth: AuthData; user: any }>;
  logout(): Promise<boolean>;
  refreshToken(): Promise<AuthData>;
  checkAuthStatus(): Promise<{ authenticated: boolean }>;
}
