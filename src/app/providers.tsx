import { COOKIE_KEYS } from "@/data/cookie-keys";
import { AuthData } from "@/modules/auth/types";
import { AuthSchema } from "@/modules/auth/validation";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";
import ClientProviders from "./client-providers";
import { UserRepository } from "@/modules/user/repository";
import { serverAPI } from "@/config/server/api";
import { StoreInitialState } from "@/store";
import { UserData } from "@/modules/user/types";

export default async function Providers({ children }: PropsWithChildren) {
  let initialState: StoreInitialState = { auth: undefined, user: undefined };

  const authCookie = cookies().get(COOKIE_KEYS.AUTH);
  if (authCookie) {
    const { data } = AuthSchema.safeParse(JSON.parse(authCookie.value));
    initialState.auth = data;

    const userRepo = new UserRepository(serverAPI);
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
