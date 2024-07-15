import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthData } from "@/modules/auth/types";
import { AuthSchema } from "@/modules/auth/validation";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import RedirectToLogin from "../redirect-to-login";

interface Props extends PropsWithChildren {}

export default function AuthenticatedRoute(props: Props) {
  const { children } = props;
  const userCookie = cookies().get(COOKIE_KEYS.AUTH);

  if (!userCookie) {
    return <RedirectToLogin />;
  }
  let auth: AuthData;

  try {
    auth = AuthSchema.parse(JSON.parse(userCookie.value));
  } catch (error: any) {
    return <RedirectToLogin />;
  }

  return <>{children}</>;
}
