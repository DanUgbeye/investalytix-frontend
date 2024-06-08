import { serverAPI } from "@/config/server/api";
import SERVER_CONFIG from "@/config/server/app";
import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthData } from "@/modules/auth/types";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * refresh token route
 * @route POST - .../auth/refresh-token
 */
async function RefreshToken(req: NextRequest) {
  try {
    if (!cookies().has(COOKIE_KEYS.AUTH)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    let { data: res } = await serverAPI.post<{ data: { auth: AuthData } }>(
      "/auth/refresh-token"
    );

    cookies().delete(COOKIE_KEYS.AUTH);
    cookies().set(COOKIE_KEYS.AUTH, JSON.stringify(res.data.auth), {
      secure: true,
      httpOnly: true,
      expires: res.data.auth.expiresIn,
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
