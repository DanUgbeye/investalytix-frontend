import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { transformUserToClient } from "../adapter";
import { ServerUserData, UserUpdate } from "../types";
import { ServerUserSchema } from "../validation";

export class UserRepository {
  constructor(private api: AxiosInstance) {}

  async getMyProfile(options?: RequestOptions) {
    const path = `/users/profile`;

    try {
      const { data } = await this.api.get<{ data: ServerUserData }>(
        path,
        options
      );
      let validation = ServerUserSchema.transform((data) =>
        transformUserToClient(data)
      ).safeParse(data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getUserProfile(userId: string, options?: RequestOptions) {
    const path = `/users/${userId}`;

    try {
      const { data } = await this.api.get<{ data: ServerUserData }>(
        path,
        options
      );
      let validation = ServerUserSchema.transform((data) =>
        transformUserToClient(data)
      ).safeParse(data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async updateUser(
    userId: string,
    userData: UserUpdate,
    options?: RequestOptions
  ) {
    const path = `/users/${userId}`;

    try {
      const { data } = await this.api.patch<{ data: ServerUserData }>(
        path,
        userData,
        options
      );
      let validation = ServerUserSchema.transform((data) =>
        transformUserToClient(data)
      ).safeParse(data.data);

      if (!validation.success) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async updatePassword(
    userId: string,
    userData: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    },
    options?: RequestOptions
  ) {
    const path = `/users/${userId}/change-password`;

    try {
      const { data } = await this.api.patch<{ data: ServerUserData }>(
        path,
        userData,
        options
      );
      let validation = ServerUserSchema.transform((data) =>
        transformUserToClient(data)
      ).safeParse(data.data);

      if (!validation.success) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  updateProfileImage() {}

  async deleteAccount(data: { password: string }, options?: RequestOptions) {
    const path = `/users/delete-account`;

    try {
      await this.api.delete(path, options);
      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}
