import SERVER_CONFIG from "@/config/app/server";
import { AuthData } from "@/modules/auth/auth.types";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * refresh token route
 * @route POST - .../auth/refresh-token
 */
async function RefreshToken(req: NextRequest) {
  const api = createAPIInstance(SERVER_CONFIG.API_BASE_URL);

  try {
    let serverCookies = cookies();

    if (!serverCookies.has("auth")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    let { data: res } = await api.post<{ data: { auth: AuthData } }>(
      "/auth/refresh-token"
    );

    serverCookies.delete("auth");
    serverCookies.set("auth", res.data.auth.token, {
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
