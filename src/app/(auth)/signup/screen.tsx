"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/fom";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PAGES from "@/data/page-map";
import { SignupData } from "@/modules/auth/auth.types";
import { useAuthRepo } from "@/modules/auth/repository";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ImCheckmark } from "react-icons/im";
import { PiSpinnerGap } from "react-icons/pi";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";

export default function SignupScreen() {
  const router = useRouter();
  const authRepo = useAuthRepo();
  const {
    control,
    formState: { isSubmitting, isDirty },
    reset,
    handleSubmit,
  } = useForm<SignupData>({
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email().toLowerCase(),
        password: z.string().min(8).max(64),
        firstname: z.string().min(2),
        lastname: z.string().min(2),
      }) satisfies ZodType<SignupData>
    ),
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleTermsAccepted(e: React.ChangeEvent<HTMLInputElement>) {
    const state = e.target.checked;
    setTermsAccepted(state);
  }

  async function onSubmit(data: SignupData) {
    try {
      let res = await authRepo.signup(data);
      reset();
      // redirect to verify email page
      toast.success("Account created");
      router.replace(PAGES.VERIFY_EMAIL);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Image
        src="/images/auth-bg.png"
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        className="fixed -top-[15%] left-0 right-0 h-auto w-full max-md:-top-0 lg:top-0"
      />

      <main className=" flex w-full items-center justify-center px-5 py-20 sm:px-10">
        <div className="z-10 flex w-full flex-col items-center">
          <Link href="/">
            <Image
              src="/assets/logo/logo-with-text.svg"
              alt="Logo"
              height={40}
              width={200}
            />
          </Link>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="auth__card__shadow mt-10 w-full max-w-md space-y-8 rounded bg-white px-8 py-8 md:max-w-xl md:px-16 md:py-12 dark:text-black"
          >
            <h1 className="mb-4 text-2xl font-bold text-[#3C4257]">
              Create your free account
            </h1>

            <Controller
              control={control}
              name="firstname"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="firstname"
                    error={!!fieldState.error}
                    className=" text-[#3C4257] "
                  >
                    Firstname
                  </FormLabel>

                  <Input
                    {...field}
                    id="firstname"
                    className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white "
                    type="text"
                    placeholder="John"
                  />

                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              )}
            />

            <Controller
              control={control}
              name="lastname"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="lastname"
                    error={!!fieldState.error}
                    className=" text-[#3C4257] "
                  >
                    Lastname
                  </FormLabel>

                  <Input
                    {...field}
                    id="lastname"
                    className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white "
                    type="text"
                    placeholder="Doe"
                  />

                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              )}
            />

            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="email"
                    error={!!fieldState.error}
                    className=" text-[#3C4257] "
                  >
                    Email
                  </FormLabel>

                  <Input
                    {...field}
                    id="email"
                    className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white "
                    type="email"
                    placeholder="example@example.com"
                  />

                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="password"
                    error={!!fieldState.error}
                    className=" text-[#3C4257] "
                  >
                    Password
                  </FormLabel>

                  <PasswordInput
                    {...field}
                    id="password"
                    className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white "
                    placeholder="******"
                  />

                  <FormMessage message={fieldState.error?.message} />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-2">
              <div className="relative flex h-fit items-center">
                <ImCheckmark className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 text-white" />

                <input
                  type="checkbox"
                  name="terms-accepted"
                  id="terms-accepted"
                  className="size-5 appearance-none rounded bg-gray-200 checked:bg-primary-base"
                  checked={termsAccepted}
                  onChange={handleTermsAccepted}
                />
              </div>

              <label htmlFor="terms-accepted" className="">
                <span className=" text-sm text-[#3C4257] ">
                  I Agree to Investalytix{" "}
                  <Link href={PAGES.LOGIN} className="text-[#635CFF]">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link href={PAGES.LOGIN} className="text-[#635CFF]">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <Button
              disabled={isSubmitting || !isDirty || !termsAccepted}
              className="h-fit w-full cursor-pointer rounded bg-primary-base py-4 text-white"
            >
              {isSubmitting ? (
                <PiSpinnerGap className=" size-5 animate-spin " />
              ) : (
                "Continue"
              )}
            </Button>

            <p className="text-center text-[#4F566B]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#635CFF]">
                Sign in
              </Link>
            </p>
          </form>

          <p className="mb-6 mt-8 text-[#4F566B] dark:text-white">
            This Site is protected by reCAPTCHA
          </p>

          <p className="text-[#697386] dark:text-white">
            &copy; Investalytix · Contact · Privacy & terms
          </p>
        </div>
      </main>
    </>
  );
}
