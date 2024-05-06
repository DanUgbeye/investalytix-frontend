"use client";

import PAGES from "@/data/page-map";
import { useAuthRepo } from "@/modules/auth/repository";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { PiSpinnerGap } from "react-icons/pi";
import { toast } from "react-toastify";
import VerifyEmailImage from "./verify-email-image";

export default function VerifyEmailScreen() {
  const params = useSearchParams();
  const email = params.get("email");
  const authRepo = useAuthRepo();
  const [sending, setSending] = useState(false);

  async function resendVerificationEmailHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (!email) return;
    setSending(true);
    try {
      await authRepo.resendVerificationEmail(email);

      toast.success("verification email send");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="flex items-center justify-center px-10 py-20">
      <div className="auth__card__shadow max-w-xl rounded bg-white px-8 py-8 md:px-16 md:py-12 dark:bg-white/10">
        <VerifyEmailImage />

        <h1 className="white-text my-4 text-center text-2xl font-bold text-[#3C4257]">
          Email Verification
        </h1>

        <p className="white-text px-7 text-[#3C4257]">
          We have sent a mail{" "}
          {email && (
            <>
              to <span className="text-primary-base">{email}</span>
            </>
          )}
          , Please click the link to confirm your email address.
        </p>

        <div className="my-4 h-[0.5px] w-full bg-[#9D9D9D]"></div>

        <p className="white-text flex flex-wrap items-center gap-1 px-7 text-[#485567]">
          If you did not receive any mail,{" "}
          {email ? (
            <>
              {sending ? (
                <PiSpinnerGap className=" mx-1 size-5 animate-spin text-[#125BD4] dark:text-[#a4c7ff] " />
              ) : (
                <button
                  className="mx-1 text-[#125BD4] dark:text-[#a4c7ff] "
                  onClick={resendVerificationEmailHandler}
                >
                  Resend Confirmation
                </button>
              )}
            </>
          ) : (
            <>
              <Link
                href={PAGES.LOGIN}
                className=" text-[#125BD4] hover:underline dark:text-[#a4c7ff]"
              >
                Login
              </Link>{" "}
              to Your account
            </>
          )}
        </p>
      </div>
    </main>
  );
}
