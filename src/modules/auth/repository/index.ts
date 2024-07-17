import { clientAPI } from "@/config/client/api";
import { ServerUserData } from "@/modules/user/types";
import { ServerUserSchema } from "@/modules/user/validation";
import { RequestOptions } from "@/types/api.types";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import { AuthData, LoginData, SignupData } from "../types";
import { AuthSchema } from "../validation";

export class AuthRepository {
  constructor(
    private api: AxiosInstance,
    private clientAPI: AxiosInstance = createAPIInstance("/api")
  ) {}

  async signup(data: SignupData, options?: RequestOptions) {
    const path = `/auth/signup`;

    try {
      await this.clientAPI.post(path, data, options);

      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async login(data: LoginData, options?: RequestOptions) {
    const path = `/auth/login`;

    try {
      const { data: res } = await this.clientAPI.post<{
        data: {
          auth: AuthData;
          user: ServerUserData;
        };
      }>(path, data, options);

      const parsedAuth = AuthSchema.safeParse(res.data.auth);
      const parsedUser = ServerUserSchema.transform((user) => {
        const { _id, ...rest } = user;
        return { id: _id, ...rest };
      }).safeParse(res.data.user);

      if (!parsedAuth.success || !parsedUser.success) {
        throw new Error("Something went wrong on our end");
      }

      return { auth: parsedAuth.data, user: parsedUser.data };
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async logout(options?: RequestOptions) {
    const searchParams = new URLSearchParams();
    const path = `/auth/logout?${searchParams.toString()}`;

    try {
      await this.clientAPI.post(path, undefined, options);
      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async refreshToken(options?: RequestOptions) {
    const path = `/auth/refresh-token`;

    try {
      const { data } = await this.clientAPI.post<{ data: { auth: AuthData } }>(
        path,
        undefined,
        options
      );

      const parsedAuth = AuthSchema.safeParse(data.data.auth);

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

    try {
      const res = await this.clientAPI.get<{
        data: { authenticated: boolean };
      }>(path, options);

      let parsedRes = z
        .object({ authenticated: z.boolean() })
        .safeParse(res.data.data);

      if (!parsedRes.success) {
        throw new Error("Something went wrong on our end");
      }

      return parsedRes.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async verifyEmail(token: string, options?: RequestOptions) {
    const path = `/auth/verify-email/${token}`;

    try {
      await this.api.get(path, options);

      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async resendVerificationEmail(email: string, options?: RequestOptions) {
    const path = `/auth/verify-email/resend`;

    try {
      await this.api.post(path, { email }, options);

      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async sendForgotPasswordLink(email: string, options?: RequestOptions) {
    const path = `/auth/forgot-password`;

    try {
      await this.api.post(path, { email }, options);

      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}

export function useAuthRepo() {
  return new AuthRepository(clientAPI);
}
