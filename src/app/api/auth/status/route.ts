import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * user auth status
 * @route POST - .../auth/status
 */
async function CheckAuthStatus(req: NextRequest) {
  try {
    let serverCookies = cookies();

    if (serverCookies.has("auth")) {
      const auth = serverCookies.get("auth")!;

      return NextResponse.json(
        { data: { authenticated: true, token: auth.value } },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { data: { authenticated: false } },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

export { CheckAuthStatus as GET };