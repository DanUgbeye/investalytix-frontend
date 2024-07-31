"use client";

import useExecuteOnce from "@/hooks/use-execute-once";
import { useAppStore } from "@/store";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useRef } from "react";

interface Props extends PropsWithChildren {}

export default function PersistentLogin(props: Props) {
  const { children } = props;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const path = usePathname();
  const user = useAppStore(({ user }) => user);
  const { toggleLoginModal, toggleLoginModalLock } = useAppStore();
  const { executeOnce, reset } = useExecuteOnce();

  useEffect(() => {
    executeOnce(() => {
      timeoutRef.current = setTimeout(() => {
        if (!user) {
          toggleLoginModal(true);
          toggleLoginModalLock(true);
        } else {
          toggleLoginModalLock(false);
          toggleLoginModal(false);
        }
      }, 20_000);
    });

    return () => {
      reset();
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, [user, path]);

  return <>{children}</>;
}
