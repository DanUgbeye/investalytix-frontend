import { AxiosInstance } from "axios";
import { AuthData, LoginData, SignupData } from "../auth.types";
import { RequestOptions } from "@/types/api.types";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { IAuthRepository } from "./interface";

export class AuthRepository implements IAuthRepository {
  constructor(private api: AxiosInstance) {}

  async signup(data: SignupData, options?: RequestOptions) {
    const path = `/auth/signup`;
    const api = createAPIInstance();

    try {
      const res = await api.post<{ auth: AuthData; user: any }>(
        path,
        data,
        options
      );
      return res.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async login(data: LoginData, options?: RequestOptions) {
    const path = `/auth/login`;
    const api = createAPIInstance();

    try {
      const res = await api.post<{ auth: AuthData; user: any }>(
        path,
        data,
        options
      );
      return res.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async logout(options?: RequestOptions) {
    const path = `/auth/login`;
    const api = createAPIInstance();

    try {
      await api.post(path, undefined, options);
      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async refreshToken(options?: RequestOptions) {
    const path = `/auth/refresh-token`;
    const api = createAPIInstance();

    try {
      const res = await api.post<AuthData>(path, undefined, options);
      return res.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async checkAuthStatus(options?: RequestOptions) {
    const path = `/auth/status`;
    const api = createAPIInstance();

    try {
      const res = await api.get<{ authenticated: boolean }>(path, options);
      return res.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}
