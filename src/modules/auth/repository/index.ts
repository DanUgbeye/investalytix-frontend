import { clientAPI } from "@/config/client/api";
import { transformUserToClient } from "@/modules/user/adapter";
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
      const res = await this.clientAPI.post<{
        data: {
          auth: AuthData;
          user: ServerUserData;
        };
      }>(path, data, options);

      const validation = z
        .object({
          auth: AuthSchema,
          user: ServerUserSchema.transform((user) =>
            transformUserToClient(user)
          ),
        })
        .safeParse(res.data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
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

      const validation = AuthSchema.safeParse(data.data.auth);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
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

      let validation = z
        .object({ authenticated: z.boolean() })
        .safeParse(res.data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
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

  async toggle2FA(state: boolean, options?: RequestOptions) {
    const path = `/auth/toggle-2fa`;

    try {
      let res = await this.api.post<{
        data: ServerUserData;
      }>(path, { enabled: state }, options);

      let validation = ServerUserSchema.transform((user) =>
        transformUserToClient(user)
      ).safeParse(res.data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}

export function useAuthRepo() {
  return new AuthRepository(clientAPI);
}
