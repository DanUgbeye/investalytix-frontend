"use client";

import PAGES from "@/data/page-map";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Container } from "./container";
import Spinner from "./spinner";

export default function RedirectToLogin(props: { notify?: boolean }) {
  const { notify = true } = props;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (notify) {
      toast.info("Login to continue", { toastId: "logout-message" });
    }
    router.replace(`${PAGES.LOGIN}?redirect=${pathname}`);
  }, []);

  return (
    <main className="pt-20 pb-40">
      <Container>
        <center>
          <Spinner />
        </center>
      </Container>
    </main>
  );
}
