import { addAuthInterceptor, createAPIInstance } from "@/utils/api-utils";
import SERVER_CONFIG from "./app";
import { cookies } from "next/headers";
import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthSchema } from "@/modules/auth/validation";

const serverAPI = createAPIInstance(SERVER_CONFIG.API_BASE_URL);

function getAuthToken() {
  try {
    const authCookie = cookies().get(COOKIE_KEYS.AUTH);

    if (!authCookie || !authCookie.value) return undefined;

    const auth = AuthSchema.parse(JSON.parse(authCookie.value));
    return auth.token;
  } catch (error: any) {
    return undefined;
  }
}

addAuthInterceptor(serverAPI, getAuthToken);
export { serverAPI };
