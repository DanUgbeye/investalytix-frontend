"use client";

import { Container } from "@/components/container";
import RedirectToLogin from "@/components/redirect-to-login";
import Spinner from "@/components/spinner";
import { useAppStore } from "@/store";
import { PropsWithChildren } from "react";

export default function AuthenticatedRoutesTemplate(props: PropsWithChildren) {
  const { children } = props;
  const initialised = useAppStore(({ initialised }) => initialised);
  const isAuthenticated = useAppStore(
    ({ auth, user }) => auth !== undefined && user !== undefined
  );

  if (!initialised) {
    return (
      <main className="py-20">
        <Container>
          <center>
            <Spinner />
          </center>
        </Container>
      </main>
    );
  }

  if (!isAuthenticated) {
    return <RedirectToLogin />;
  }

  return children;
}
