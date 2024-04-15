import { ServerUserSchema } from "@/modules/user/validation";
import { RequestOptions } from "@/types/api.types";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import { AuthData, LoginData, SignupData } from "../auth.types";
import { AuthSchema } from "../validation";
import { clientAPI } from "@/config/api";

export class AuthRepository {
  constructor(private api: AxiosInstance) {}

  async signup(data: SignupData, options?: RequestOptions) {
    const path = `/auth/signup`;
    const api = createAPIInstance("/api");

    try {
      const { data: res } = await api.post<{ auth: AuthData; user: any }>(
        path,
        data,
        options
      );

      const parsedAuth = AuthSchema.safeParse(res.auth);
      const parsedUser = ServerUserSchema.transform((user) => {
        const { _id, ...rest } = user;
        return { id: _id, ...rest };
      }).safeParse(res.user);

      if (!parsedAuth.success || !parsedUser.success) {
        throw new Error("Something went wrong on our end");
      }

      return { auth: parsedAuth.data, user: parsedUser.data };
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async login(data: LoginData, options?: RequestOptions) {
    const path = `/auth/login`;
    const api = createAPIInstance("/api");

    try {
      const { data: res } = await api.post<{ auth: AuthData; user: any }>(
        path,
        data,
        options
      );

      const parsedAuth = AuthSchema.safeParse(res.auth);
      const parsedUser = ServerUserSchema.transform((user) => {
        const { _id, ...rest } = user;
        return { id: _id, ...rest };
      }).safeParse(res.user);

      if (!parsedAuth.success || !parsedUser.success) {
        throw new Error("Something went wrong on our end");
      }

      return { auth: parsedAuth.data, user: parsedUser.data };
    } catch (error: any) {
      console.log(error)
      let err = handleAPIError(error);
      throw err;
    }
  }

  async logout(options?: RequestOptions) {
    const path = `/auth/login`;
    const api = createAPIInstance("/api");

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
    const api = createAPIInstance("/api");

    try {
      const { data } = await api.post<AuthData>(path, undefined, options);

      const parsedAuth = AuthSchema.safeParse(data);

      if (!parsedAuth.success) {
        throw new Error("Something went wrong on our end");
      }

      return parsedAuth.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async checkAuthStatus(options?: RequestOptions) {
    const path = `/auth/status`;
    const api = createAPIInstance("/api");

    try {
      const { data } = await api.get<{ authenticated: boolean }>(path, options);
      let parsedRes = z.object({ authenticated: z.boolean() }).safeParse(data);

      if (!parsedRes.success) {
        throw new Error("Something went wrong on our end");
      }

      return parsedRes.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}

export function useAuthRepo() {
  return new AuthRepository(clientAPI);
}
