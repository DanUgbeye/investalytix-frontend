"use client";

import { useAuthRepo } from "@/modules/auth/repository";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { PiSpinnerGap } from "react-icons/pi";
import VerifyEmailImage from "../verify-email-image";

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
            <h1 className="my-4 text-center text-2xl font-bold text-[#3C4257] dark:text-white">
              Verifying email
            </h1>

            <PiSpinnerGap className=" size-10 animate-spin text-primary-base " />
          </center>
        )}

        {!verifying && verified && (
          <center className=" space-y-10 ">
            <div className=" relative w-fit ">
              <VerifyEmailImage />

              <FaCircleCheck className=" absolute right-2 top-3 size-12 text-green-600 " />
            </div>

            <div className="  ">
              <h1 className=" text-center text-lg font-bold text-[#3C4257] dark:text-white">
                Email Verified
              </h1>

              <span className=" text-sm font-semibold text-green-600 ">
                Your email has been verified successfully
              </span>
            </div>
          </center>
        )}

        {!verifying && !verified && errorMessage && (
          <center className=" space-y-10 ">
            <div className=" relative w-fit ">
              <VerifyEmailImage />

              <IoCloseCircle className=" absolute right-2 top-3 size-12 text-red-600 " />
            </div>

            <div className="  ">
              <h1 className=" text-center text-2xl font-bold text-[#3C4257] dark:text-white">
                Verification failed
              </h1>

              <span className=" text-sm font-semibold text-red-600 ">
                {errorMessage}
              </span>
            </div>
          </center>
        )}
      </div>
    </main>
  );
}
