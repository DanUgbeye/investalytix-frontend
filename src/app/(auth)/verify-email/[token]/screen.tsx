"use client";

import { useAuthRepo } from "@/modules/auth/repository";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { PiSpinnerGap } from "react-icons/pi";
import VerifyEmailImage from "../verify-email-image";
import Link from "next/link";
import PAGES from "@/data/page-map";
import { buttonVariants } from "@/components/ui/button";

export default function VerifyEmailTokenScreen(props: { token: string }) {
  const { token } = props;
  const authRepo = useAuthRepo();

  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  async function verifyEmail() {
    try {
      await authRepo.verifyEmail(token);
      setVerified(true);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setVerifying(false);
    }
  }

  useEffect(() => {
    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <main className="flex items-center justify-center px-10 py-20">
      <div className="auth__card__shadow max-w-xl rounded bg-white px-8 py-8 md:px-16 md:py-12 dark:bg-white/10">
        {verifying && (
          <center className=" space-y-10 ">
            <h1 className="white-text my-4 text-center text-2xl font-bold text-[#3C4257]">
              Verifying email
            </h1>

            <PiSpinnerGap className=" size-10 animate-spin text-primary-base " />
          </center>
        )}

        {!verifying && verified && (
          <center className=" space-y-10 ">
            <div className=" relative w-fit ">
              <VerifyEmailImage />

              <span className=" absolute right-2 top-3 h-fit w-fit rounded-full bg-white ">
                <FaCircleCheck className="  size-12 text-green-500 " />
              </span>
            </div>

            <div className="  ">
              <h1 className=" white-text text-center text-lg font-bold text-[#3C4257]">
                Email Verified
              </h1>

              <span className=" font-semibold text-green-600 ">
                Your email has been verified successfully
              </span>

              <div className=" flex gap-1 pt-8 justify-center text-sm ">
                <span>Proceed to</span>

                <Link
                  href={PAGES.LOGIN}
                  className={
                    (buttonVariants({ variant: "link" }), " text-primary-base hover:underline underline-offset-4 ")
                  }
                >
                  Login
                </Link>
              </div>
            </div>
          </center>
        )}

        {!verifying && !verified && errorMessage && (
          <center className=" space-y-10 ">
            <div className=" relative w-fit ">
              <VerifyEmailImage />

              <span className=" absolute right-2 top-3 h-fit w-fit rounded-full bg-white ">
                <IoCloseCircle className=" size-12 text-red-600 " />
              </span>
            </div>

            <div className="  ">
              <h1 className=" white-text text-center text-2xl font-bold text-[#3C4257]">
                Verification failed
              </h1>

              <span className=" font-semibold text-red-600 ">
                {errorMessage}
              </span>
            </div>
          </center>
        )}
      </div>
    </main>
  );
}
