import { serverAPI } from "@/config/server/api";
import SERVER_CONFIG from "@/config/server/app";
import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthData } from "@/modules/auth/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * refresh token route
 * @route POST - .../auth/refresh-token
 */
async function RefreshToken(req: NextRequest) {
  try {
    // PROXY REQUEST TO BACKEND SERVER
    let res = await serverAPI.post<{
      data: { auth: AuthData };
    }>("/auth/refresh-token", undefined, {
      headers: {
        ...Array.from(req.headers.entries()).reduce(
          (acc, entry) => {
            const [key, value] = entry;
            acc[key] = value;
            return acc;
          },
          {} as Record<string, any>
        ),
        host: new URL(SERVER_CONFIG.API_BASE_URL).host,
      },
      withCredentials: true,
      validateStatus: (status) => true, // Resolve all status codes
    });

    const responseHeaders = new Headers();
    Object.keys(res.headers).forEach((key) => {
      responseHeaders.set(key, res.headers[key]);
    });

    cookies().set(COOKIE_KEYS.AUTH, JSON.stringify(res.data.data.auth), {
      secure: true,
      httpOnly: true,
      expires: res.data.data.auth.expiresIn,
    });

    return NextResponse.json(res.data, { status: 200 });
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

export { RefreshToken as POST };

