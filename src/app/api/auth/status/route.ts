import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthSchema } from "@/modules/auth/validation";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * user auth status
 * @route POST - .../auth/status
 */
async function CheckAuthStatus(req: NextRequest) {
  try {
    const authCookie = cookies().get(COOKIE_KEYS.AUTH);
    if (authCookie !== undefined && authCookie.value !== undefined) {
      const auth = AuthSchema.parse(JSON.parse(authCookie.value));

      return NextResponse.json(
        { data: { authenticated: true, ...auth } },
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
