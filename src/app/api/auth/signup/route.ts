import { serverAPI } from "@/config/server/api";
import SERVER_CONFIG from "@/config/server/app";
import { createAPIInstance, handleAPIError } from "@/utils/api-utils";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

/**
 * user signup route
 * @route POST - .../auth/signup
 */
async function Signup(req: NextRequest) {
  try {
    let body = await req.json();
    let { data } = await serverAPI.post("/auth/register", body);

    return NextResponse.json(data, { status: 201 });
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
