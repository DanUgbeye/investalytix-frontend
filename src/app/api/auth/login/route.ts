import { serverAPI } from "@/config/server/api";
import SERVER_CONFIG from "@/config/server/app";
import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthData } from "@/modules/auth/types";
import { ServerUserData } from "@/modules/user/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * user login route
 * @route POST - .../auth/login
 */
async function Login(req: NextRequest) {
  try {
    let body = await req.json();

    // PROXY REQUEST TO BACKEND SERVER
    let res = await serverAPI.post<{
      data: { user: ServerUserData; auth: AuthData } | { enabled2FA: boolean };
    }>("/auth/login", body, {
      headers: {
        ...Array.from(req.headers.entries()).reduce(
          (headers, entry) => {
            const [key, value] = entry;
            headers[key] = value;
            return headers;
          },
          {} as Record<string, any>
        ),
        host: new URL(SERVER_CONFIG.API_BASE_URL).host,
      },
      withCredentials: true,
    });

    if ("user" in res.data.data) {
      const {
        user,
        auth: { expiresIn, token },
      } = res.data.data;

      const auth: AuthData = {
        token: token,
        expiresIn: expiresIn,
      };

      // set auth token cookie
      cookies().set(COOKIE_KEYS.AUTH, JSON.stringify(auth), {
        secure: true,
        httpOnly: true,
        expires: auth.expiresIn,
      });

      revalidatePath("/", "layout");
    }

    const responseHeaders = new Headers();
    let headerValue = res.headers["set-cookie"];
    if (Array.isArray(headerValue)) {
      headerValue.forEach((value) => {
        responseHeaders.append("set-cookie", value);
      });
    } else if (headerValue !== undefined) {
      responseHeaders.append("set-cookie", headerValue);
    }

    return NextResponse.json(res.data, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch (err: any) {
    if (err instanceof AxiosError) {
      return NextResponse.json(
        err.response?.data || { message: handleAPIError(err).message },
        { status: err.status || 400 }
      );
    }

    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

export { Login as POST };

