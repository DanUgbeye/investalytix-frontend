import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthSchema } from "@/modules/auth/validation";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import RedirectToLogin from "../redirect-to-login";

interface Props extends PropsWithChildren {}

export default async function AuthenticatedRoute(props: Props) {
  const { children } = props;
  const userCookie = cookies().get(COOKIE_KEYS.AUTH);
  // console.log("userCookie", userCookie);

  if (!userCookie) {
    return <RedirectToLogin />;
  }

  try {
    let auth = AuthSchema.parse(JSON.parse(userCookie.value));
  } catch (error: any) {
    return <RedirectToLogin />;
  }

  return <>{children}</>;
}
