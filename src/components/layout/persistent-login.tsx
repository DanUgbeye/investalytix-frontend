"use client";

import useExecuteOnce from "@/hooks/use-execute-once";
import { useAppStore } from "@/store";
import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {}

export default function PersistentLogin(props: Props) {
  const { children } = props;
  const user = useAppStore(({ user }) => user);
  const { toggleLoginModal, toggleLoginModalLock } = useAppStore();
  const { executeOnce, reset } = useExecuteOnce();

  useEffect(() => {
    executeOnce(() => {
      setTimeout(() => {
        if (!user) {
          toggleLoginModal(true);
          toggleLoginModalLock(true);
        } else {
          toggleLoginModalLock(false);
          toggleLoginModal(false);
        }
      }, 20_000);
    });

    return reset;
  }, [user]);

  return <>{children}</>;
}
