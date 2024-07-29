import { serverAPI } from "@/config/server/api";
import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthSchema } from "@/modules/auth/validation";
import { UserRepository } from "@/modules/user/repository";
import { UserData } from "@/modules/user/types";
import { StoreInitialState } from "@/store";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import ClientProviders from "./client-providers";

export default async function Providers({ children }: PropsWithChildren) {
  let initialState: StoreInitialState = { auth: undefined, user: undefined };
  const userRepo = new UserRepository(serverAPI);

  const authCookie = cookies().get(COOKIE_KEYS.AUTH);
  if (authCookie) {
    const { data } = AuthSchema.safeParse(JSON.parse(authCookie.value));
    initialState.auth = data;
  }

  if (initialState.auth) {
    let user: UserData | undefined = undefined;

    try {
      user = await userRepo.getMyProfile();
      initialState.user = user;
    } catch (error: any) {}
  }

  return (
    <ClientProviders initialState={initialState}>{children}</ClientProviders>
  );
}
