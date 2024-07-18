"use client";

import { FormItem, FormMessage } from "@/components/form";
import InvestalytixLogoWordMark from "@/components/logo";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import PAGES from "@/data/page-map";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { cn } from "@/lib/utils";
import { useAuthRepo } from "@/modules/auth/repository";
import { useAppStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { toast } from "react-toastify";
import { z } from "zod";

export default function OTPScreen() {
  const router = useRouter();
  const authRepo = useAuthRepo();
  const setAuth = useAppStore(({ setAuth }) => setAuth);
  const searchParams = useSearchParams();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [email, setEmail] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  const {
    control,
    formState: { isSubmitting, isDirty },
    reset,
    handleSubmit,
    watch,
  } = useForm<{ otp: string }>({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(
      z.object({
        otp: z.string(),
      })
    ),
  });
  const otp = watch("otp");

  async function onSubmit(data: { otp: string }) {
    try {
      let res = await authRepo.verifyOTP({ email, emailOTP: data.otp });
      setPageLoading(true);
      console.log(data);

      setAuth(res);
      reset();
      toast.success("Login Successful");
      window.localStorage.removeItem(LOCALSTORAGE_KEYS.OTP_EMAIL);

      const redirect = searchParams.get("redirect");
      window.location.href = redirect ? redirect : PAGES.HOME;
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  function goBack() {
    window.history.back();
  }

  useEffect(() => {
    const savedEmail = localStorage.getItem(LOCALSTORAGE_KEYS.OTP_EMAIL);
    if (!savedEmail) {
      window.location.href = PAGES.LOGIN;
      return;
    }

    const validation = z.string().email().safeParse(savedEmail);
    if (validation.error) {
      localStorage.removeItem(LOCALSTORAGE_KEYS.OTP_EMAIL);
      window.location.href = PAGES.LOGIN;
      return;
    }

    setEmail(validation.data);
    setPageLoading(false);
  }, []);

  return (
    <>
      <main className="mx-auto min-h-screen grid-cols-[1fr,1fr] md:grid">
        <div
          className={cn(
            "mx-auto flex w-full max-w-[600px] flex-col gap-10 px-5 py-24 duration-300 max-md:h-screen md:px-14",
            { "pointer-events-none opacity-50": pageLoading || isSubmitting }
          )}
        >
          <Link href="/" className="mx-auto w-fit">
            <InvestalytixLogoWordMark />
          </Link>

          <div className="w-full space-y-10">
            <MdMarkEmailRead className="mx-auto size-32 text-primary-base sm:size-40" />

            <div className="space-y-1">
              <h2 className="text-center text-xl font-bold sm:text-3xl">
                OTP Verification
              </h2>

              <p className="text-center text-sm text-main-gray-400">
                Enter the OTP sent to your email
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <Controller
                control={control}
                name="otp"
                rules={{ required: true }}
                render={({ field: { disabled, ...field }, fieldState }) => (
                  <FormItem className="flex justify-center">
                    <InputOTP
                      maxLength={6}
                      {...field}
                      disabled={disabled || isSubmitting}
                      className=" "
                    >
                      <InputOTPGroup>
                        <InputOTPSlot
                          index={0}
                          className="mx-1 size-9 rounded-none border border-main-gray-600 sm:mx-2 sm:size-14"
                        />
                        <InputOTPSlot
                          index={1}
                          className="mx-1 size-9 rounded-none border border-main-gray-600 sm:mx-2 sm:size-14"
                        />
                        <InputOTPSlot
                          index={2}
                          className="mx-1 size-9 rounded-none border border-main-gray-600 sm:mx-2 sm:size-14"
                        />
                      </InputOTPGroup>

                      <InputOTPSeparator className="max-sm:hidden" />

                      <InputOTPGroup>
                        <InputOTPSlot
                          index={3}
                          className="mx-1 size-9 rounded-none border border-main-gray-600 sm:mx-2 sm:size-14"
                        />
                        <InputOTPSlot
                          index={4}
                          className="mx-1 size-9 rounded-none border border-main-gray-600 sm:mx-2 sm:size-14"
                        />
                        <InputOTPSlot
                          index={5}
                          className="mx-1 size-9 rounded-none border border-main-gray-600 sm:mx-2 sm:size-14"
                        />
                      </InputOTPGroup>
                    </InputOTP>

                    <FormMessage message={fieldState.error?.message} />
                  </FormItem>
                )}
              />

              <div className="flex flex-col items-center space-y-2">
                <Button
                  ref={buttonRef}
                  disabled={isSubmitting || !isDirty || otp.length < 6}
                  className="h-fit w-full max-w-md cursor-pointer rounded-md py-4"
                >
                  {isSubmitting ? (
                    <Spinner className="size-5 animate-spin text-white" />
                  ) : (
                    "Proceed"
                  )}
                </Button>

                <Link
                  href={`${PAGES.LOGIN}?${searchParams.toString()}`}
                  className="text-primary-base underline-offset-4 hover:underline"
                >
                  Back to login ?
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="md:relative">
          <div className="relative top-0 bg-cover bg-left bg-no-repeat md:sticky md:h-screen">
            <Image src="/images/auth.jpg" fill alt="" priority sizes="100%" />
            <button
              onClick={goBack}
              className="absolute right-5 top-5 inline-block rounded-full bg-primary-base p-2"
            >
              <FiArrowLeft className="size-6 text-white md:size-10" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
