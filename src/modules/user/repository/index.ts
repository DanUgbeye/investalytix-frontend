import { clientAPI } from "@/config/api";
import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { UserData } from "../user.types";
import { UserSchema } from "../validation";

export class UserRepository {
  constructor(private api: AxiosInstance) {}

  async getUserProfile(userId: string, options?: RequestOptions) {
    const path = `/users/${userId}`;

    try {
      const { data } = await this.api.get<{ data: { User: UserData } }>(
        path,
        options
      );
      let parsedRes = UserSchema.safeParse(data.data.User);

      if (!parsedRes.success) {
        throw new Error("Something went wrong on our end");
      }

      return parsedRes.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  updateUser() {}
  updateProfileImage() {}
}

export function useUserRepo() {
  return new UserRepository(clientAPI);
}
