"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/fom";
import { Button } from "@/components/ui/button";
import { LoginData } from "@/modules/auth/auth.types";
import { useAuthRepo } from "@/modules/auth/repository";
import useAuthStore from "@/modules/auth/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { ImCheckmark } from "react-icons/im";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";
import { PiSpinnerGap } from "react-icons/pi";

export default function LoginScreen() {
  const authRepo = useAuthRepo();
  const setAuth = useAuthStore(({ set }) => set);
  const {
    control,
    formState: { isSubmitting, isDirty },
    reset,
    handleSubmit,
  } = useForm<LoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email().toLowerCase(),
        password: z.string().min(8).max(64),
      }) satisfies ZodType<LoginData>
    ),
  });

  async function onSubmit(data: LoginData) {
    try {
      let res = await authRepo.login(data);
      setAuth(res);
      reset();
      toast.success("Login Successful");
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
        className=" fixed -top-[15%] left-0 right-0 h-auto w-full max-md:-top-0 lg:top-0"
      />

      <main className="flex items-center justify-center px-5 py-20 sm:px-10">
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
            className="auth__card__shadow mt-10 w-full max-w-md space-y-8 rounded bg-white px-8 py-8 md:max-w-xl md:px-16 md:py-12 dark:text-black"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mb-4 text-2xl font-bold text-[#3C4257] max-sm:max-w-[15ch]">
              Sign in to your account
            </h1>

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

                  <input
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
                  <div className="flex items-center justify-between">
                    <FormLabel
                      htmlFor="password"
                      error={!!fieldState.error}
                      className=" text-[#3C4257] "
                    >
                      Password
                    </FormLabel>

                    <Link
                      href="/forgot-password"
                      className="text-sm text-[#635CFF]"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <input
                    {...field}
                    id="password"
                    className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white "
                    type="password"
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
                  name="stay-signed-in"
                  id="stay-signed-in"
                  className="size-5 appearance-none rounded bg-gray-200 checked:bg-primary-base"
                />
              </div>

              <label
                htmlFor="stay-signed-in"
                className="text-sm text-[#3C4257]"
              >
                Stay signed in for a week
              </label>
            </div>

            <Button
              disabled={isSubmitting || !isDirty}
              className="h-fit w-full cursor-pointer rounded bg-primary-base py-4 text-white"
            >
              {isSubmitting ? (
                <PiSpinnerGap className=" size-5 animate-spin " />
              ) : (
                "Continue"
              )}
            </Button>
          </form>

          <p className="mb-6 mt-8 text-[#4F566B] dark:text-white">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#635CFF] dark:text-[#9b96ff]">
              Sign up
            </Link>
          </p>

          <p className="text-[#697386] dark:text-white">
            &copy; Investalytix · Contact · Privacy & terms
          </p>
        </div>
      </main>
    </>
  );
}
