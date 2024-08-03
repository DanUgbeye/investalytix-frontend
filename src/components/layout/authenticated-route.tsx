import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthSchema } from "@/modules/auth/validation";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import RedirectToLogin from "../redirect-to-login";

interface Props extends PropsWithChildren {}

export default async function AuthenticatedRoute(props: Props) {
  const { children } = props;
  const authCookie = cookies().get(COOKIE_KEYS.AUTH);
  const refreshCookie = cookies().get(COOKIE_KEYS.REFRESH_TOKEN);
  // console.log("refreshCookie", refreshCookie);

  if (!authCookie && !refreshCookie) {
    return <RedirectToLogin />;
  }

  if (authCookie) {
    try {
      let auth = AuthSchema.parse(JSON.parse(authCookie.value));
    } catch (error: any) {
      return <RedirectToLogin />;
    }
  }

  return <>{children}</>;
}
