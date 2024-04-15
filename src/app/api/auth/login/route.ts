import SERVER_CONFIG from "@/config/app/server";
import { AuthData } from "@/modules/auth/auth.types";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * user login route
 * @route POST - .../auth/login
 */
async function Login(req: NextRequest) {
  const api = createAPIInstance(SERVER_CONFIG.API_BASE_URL);

  try {
    let body = await req.json();
    let res = await api.post<AuthData>("/auth/login", body);
    let serverCookies = cookies();

    serverCookies.set("auth", res.data.token, {
      secure: true,
      httpOnly: true,
      expires: res.data.expiresIn,
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

export { Login as POST };
