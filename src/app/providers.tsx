import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthData } from "@/modules/auth/types";
import { AuthSchema } from "@/modules/auth/validation";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import ClientProviders from "./client-providers";

export default function Providers({ children }: PropsWithChildren) {
  let auth: AuthData | undefined = undefined;
  const authCookie = cookies().get(COOKIE_KEYS.AUTH);
  if (authCookie) {
    const { data } = AuthSchema.safeParse(JSON.parse(authCookie.value));
    auth = data;
  }

  return (
    <ClientProviders initialState={{ auth, user: undefined }}>
      {children}
    </ClientProviders>
  );
}
