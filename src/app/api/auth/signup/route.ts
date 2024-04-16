import SERVER_CONFIG from "@/config/app/server";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

/**
 * user signup route
 * @route POST - .../auth/signup
 */
async function Signup(req: NextRequest) {
  const api = createAPIInstance(SERVER_CONFIG.API_BASE_URL);

  try {
    let body = await req.json();
    let { data } = await api.post("/auth/register", body);

    return NextResponse.json(data, { status: 200 });
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

export { Signup as POST };

