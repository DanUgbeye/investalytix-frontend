"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/form";
import InvestalytixLogoWordMark from "@/components/logo";
import { PasswordInput } from "@/components/password-input";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PAGES from "@/data/page-map";
import { LOCALSTORAGE_KEYS } from "@/data/storage-keys";
import { useAuthRepo } from "@/modules/auth/repository";
import { LoginData } from "@/modules/auth/types";
import { useAppStore } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";
import { ImCheckmark } from "react-icons/im";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";

export default function LoginScreen() {
  const router = useRouter();
  const authRepo = useAuthRepo();
  const setAuth = useAppStore(({ setAuth }) => setAuth);
  const searchParams = useSearchParams();

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
      if ("enabled2FA" in res) {
        localStorage.setItem(LOCALSTORAGE_KEYS.OTP_EMAIL, data.email);
        window.location.href = `${PAGES.OTP_LOGIN}?${searchParams.toString()}`;
      } else {
        setAuth(res);
        reset();
        toast.success("Login Successful");
        const redirect = searchParams.get("redirect");
        window.location.href = redirect ? redirect : PAGES.HOME;
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <main className="mx-auto min-h-screen grid-cols-[1fr,1fr] md:grid">
        <div className="mx-auto flex w-full max-w-[600px] flex-col gap-10 px-5 py-24 max-md:h-screen md:px-14">
          <Link href="/" className="w-fit">
            <InvestalytixLogoWordMark />
          </Link>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="email"
                      error={!!fieldState.error}
                      className=" "
                    >
                      Email
                    </FormLabel>

                    <Input
                      {...field}
                      id="email"
                      className="h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10"
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
                  <FormItem className="mt-6">
                    <div className="mb-3 mt-3 flex items-center justify-between">
                      <FormLabel
                        htmlFor="password"
                        error={!!fieldState.error}
                        className=""
                      >
                        Password
                      </FormLabel>

                      <Link
                        href={PAGES.FORGOT_PASSWORD}
                        className="rounded-md px-2 py-1 text-sm text-primary-base dark:text-primary-light"
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    <PasswordInput
                      {...field}
                      id="password"
                      className="h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:!bg-white/10"
                      classNames={{
                        showButton:
                          " dark:text-main-gray-300 dark:hover:bg-main-gray-700 dark:hover:text-main-gray-300 ",
                      }}
                      placeholder="******"
                    />

                    <FormMessage message={fieldState.error?.message} />
                  </FormItem>
                )}
              />

              <div className="my-6 flex items-center gap-2">
                <div className="relative flex h-fit items-center">
                  <ImCheckmark className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 text-white" />

                  <input
                    type="checkbox"
                    name="stay-signed-in"
                    id="stay-signed-in"
                    className="size-5 appearance-none rounded bg-gray-200 checked:bg-primary-base dark:bg-white/10"
                  />
                </div>

                <label htmlFor="stay-signed-in" className="text-sm">
                  Stay signed in for a week
                </label>
              </div>

              <Button
                disabled={isSubmitting || !isDirty}
                className="h-fit w-full cursor-pointer rounded-md py-4"
              >
                {isSubmitting ? (
                  <Spinner className="size-5 animate-spin text-white" />
                ) : (
                  "Continue"
                )}
              </Button>
            </form>

            <div className="relative mt-3">
              <p className="mx-auto w-fit bg-white p-4 dark:bg-black">or</p>
              <div className="absolute left-0 right-0 top-1/2 -z-[1] h-[0.5px] translate-y-1/2 bg-black/20 dark:bg-white/20"></div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="group mb-5 flex w-full items-center justify-center gap-3 rounded-md border border-black px-4 py-3 hover:bg-black hover:text-white/70 focus:bg-black focus:text-white/70 dark:border-white/80 dark:hover:bg-white/80 dark:hover:text-black dark:focus:bg-white/80 dark:focus:text-black"
            >
              <FcGoogle className="size-5" />
              <span className="text-sm font-medium group-hover:text-white group-focus:text-white dark:text-white dark:group-hover:text-black dark:group-focus:text-black">
                Sign up with Google
              </span>
            </Button>

            <p className="text-center">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-hover-focus rounded-md px-2 py-1 text-primary-base dark:text-primary-light"
              >
                Sign up
              </Link>
            </p>
          </div>

          <p className="mx-auto w-fit text-sm md:text-base">
            &copy; Investalytix ·{" "}
            <Link href="/contact-us" className="text-hover-focus">
              Contact
            </Link>{" "}
            ·{" "}
            <Link href="/privacy-policy" className="text-hover-focus">
              Privacy & terms
            </Link>
          </p>
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
