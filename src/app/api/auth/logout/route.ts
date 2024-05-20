import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * user logout route
 * @route POST - .../auth/logout
 */
async function Logout(req: NextRequest) {
  try {
    let serverCookies = cookies();
    if (serverCookies.has("auth")) {
      serverCookies.delete("auth");
    }

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

export { Logout as POST };
