"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/fom";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PAGES from "@/data/page-map";
import { SignupData } from "@/modules/auth/types";
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
import { FiArrowLeft } from "react-icons/fi";

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
      toast.success("Account created");

      const params = new URLSearchParams();
      params.set("email", data.email);
      // redirect to verify email page
      router.replace(`${PAGES.VERIFY_EMAIL}?${params.toString()}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <main className="mx-auto min-h-screen grid-cols-[1fr,1fr] max-md:pb-20 md:grid bg-white">
        <div className="flex w-full flex-col justify-between gap-10 px-14 py-24 max-md:h-screen">
          <Link href="/">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              className="h-14 w-auto self-start md:h-24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 850 260"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n      .cls-1 {\n        fill: #fb8b1e;\n      }\n    ",
                  }}
                />
              </defs>
              <path d="m159.23,97.01c7.23,0,13.21,2.43,17.94,7.28,4.72,4.85,7.08,11.56,7.08,20.12v40.64h-17.07v-38.52c0-4.41-1.19-7.79-3.57-10.13-2.38-2.33-5.56-3.51-9.53-3.51-4.41,0-7.94,1.37-10.59,4.1s-3.97,6.84-3.97,12.31v35.74h-17.08v-66.19h17.08v7.41c4.15-6.17,10.72-9.27,19.72-9.27Z" />
              <path d="m241.16,98.86h18.8l-25.15,66.19h-19.46l-25.15-66.19h18.8l16.02,46.33,16.15-46.33Z" />
              <path d="m279.95,138.97c2.29,8.3,8.51,12.44,18.66,12.44,6.53,0,11.47-2.2,14.83-6.62l13.77,7.94c-6.53,9.44-16.15,14.16-28.86,14.16-10.94,0-19.72-3.31-26.34-9.93-6.62-6.62-9.93-14.96-9.93-25.02s3.26-18.29,9.8-24.95c6.53-6.66,14.91-10,25.15-10,9.71,0,17.72,3.35,24.03,10.06,6.31,6.71,9.46,15,9.46,24.88,0,2.21-.22,4.55-.66,7.02h-49.9Zm-.27-13.24h33.75c-.97-4.5-2.98-7.85-6.02-10.06-3.04-2.2-6.51-3.31-10.39-3.31-4.59,0-8.38,1.17-11.38,3.51-3,2.34-4.99,5.63-5.96,9.86Z" />
              <path d="m355.53,117.66c0,1.77,1.17,3.2,3.51,4.3,2.34,1.1,5.18,2.07,8.54,2.91,3.35.84,6.71,1.9,10.06,3.18,3.35,1.28,6.2,3.42,8.54,6.42,2.34,3,3.51,6.75,3.51,11.25,0,6.8-2.54,12.03-7.61,15.68-5.08,3.66-11.41,5.49-19,5.49-13.59,0-22.86-5.25-27.8-15.75l14.83-8.34c1.94,5.74,6.27,8.6,12.97,8.6,6.09,0,9.13-1.9,9.13-5.69,0-1.76-1.17-3.2-3.51-4.3-2.34-1.1-5.19-2.09-8.54-2.98-3.35-.88-6.71-1.99-10.06-3.31-3.35-1.32-6.2-3.42-8.54-6.29-2.34-2.87-3.51-6.46-3.51-10.79,0-6.53,2.4-11.67,7.21-15.42,4.81-3.75,10.79-5.63,17.94-5.63,5.38,0,10.28,1.21,14.69,3.64,4.41,2.43,7.9,5.89,10.46,10.39l-14.56,7.94c-2.12-4.5-5.65-6.75-10.59-6.75-2.21,0-4.04.49-5.49,1.46-1.46.97-2.18,2.3-2.18,3.97Z" />
              <path d="m430.73,115.27h-14.96v27.53c0,2.3.57,3.97,1.72,5.03,1.14,1.06,2.82,1.65,5.03,1.79,2.21.13,4.94.11,8.21-.07v15.49c-11.74,1.32-20.01.22-24.82-3.31-4.81-3.53-7.21-9.84-7.21-18.93v-57.32l17.08-5.16v18.53h14.96v16.41Z" />
              <path
                className="cls-1"
                d="m483.67,128.19c.41,1.19.58,2.47.58,3.75s-.17,2.59-.58,3.78c-.23.84-.52,1.69-.99,2.41-1.19,2.3-3.05,4.1-5.29,5.32-.76.44-1.6.79-2.47,1.05-1.19.32-2.41.49-3.75.49s-2.56-.17-3.72-.49c-.87-.26-1.66-.61-2.47-1.05-2.24-1.22-4.1-3.02-5.32-5.32-.38-.73-.73-1.57-.99-2.41-.35-1.19-.55-2.44-.55-3.78s.2-2.56.55-3.75c.26-.84.61-1.66.99-2.44,1.22-2.24,3.08-4.07,5.32-5.32.81-.41,1.6-.76,2.47-1.02,1.16-.32,2.41-.52,3.72-.52s2.56.2,3.75.52c.87.26,1.72.61,2.47,1.02,2.24,1.25,4.1,3.08,5.29,5.32.47.79.76,1.6.99,2.44Z"
              />
              <path
                className="cls-1"
                d="m491.09,98.87v7.79c-5.12-6.43-12.3-9.66-21.58-9.66s-16.4,3.37-22.69,10.12c-6.31,6.75-9.48,15.04-9.48,24.84s3.17,18.06,9.48,24.81c6.28,6.75,13.87,10.12,22.69,10.12,9.28,0,16.46-3.23,21.58-9.66v7.79h17.07v-66.17h-17.07Zm4.57,37.99h-3.52c-.58,2.3-1.45,4.45-2.68,6.37l2.53,2.5-6.98,6.98-2.5-2.5c-1.92,1.19-4.13,2.12-6.37,2.62v3.58h-9.83v-3.58c-2.3-.55-4.45-1.43-6.37-2.62l-2.56,2.5-6.95-6.98.7-.73,1.83-1.77c-1.25-1.95-2.12-4.07-2.62-6.37h-3.61v-9.86h3.61c.49-2.27,1.37-4.42,2.62-6.34l-2.53-2.56,6.95-6.95,2.56,2.5c1.92-1.22,4.07-2.09,6.37-2.59v-3.55h9.83v3.55c2.24.49,4.45,1.37,6.37,2.59l.96-.96,1.54-1.54,6.98,6.95-1.63,1.69-.9.84c1.11,1.77,2.01,3.78,2.53,5.93.06.12.12.29.15.44h3.52v9.86Z"
              />
              <path
                className="cls-1"
                d="m523.65,165.05v-96.63h17.08v96.63h-17.08Z"
              />
              <path
                className="cls-1"
                d="m599.5,98.86h18.27l-24.09,66.19c-3.44,9.53-8.01,16.43-13.7,20.71-5.69,4.28-12.77,6.2-21.24,5.76v-15.89c4.59.09,8.23-.88,10.92-2.91,2.69-2.03,4.83-5.29,6.42-9.8l-27.14-64.07h18.66l17.21,44.48,14.69-44.48Z"
              />
              <path
                className="cls-1"
                d="m657.88,115.27h-14.96v27.53c0,2.3.57,3.97,1.72,5.03,1.14,1.06,2.82,1.65,5.03,1.79,2.2.13,4.94.11,8.21-.07v15.49c-11.74,1.32-20.01.22-24.82-3.31-4.81-3.53-7.21-9.84-7.21-18.93v-57.32l17.08-5.16v18.53h14.96v16.41Z"
              />
              <path
                className="cls-1"
                d="m678.4,90.92c-2.83,0-5.27-1.04-7.35-3.11-2.08-2.07-3.11-4.52-3.11-7.35s1.03-5.3,3.11-7.41c2.07-2.12,4.52-3.18,7.35-3.18s5.41,1.06,7.48,3.18c2.07,2.12,3.11,4.59,3.11,7.41s-1.04,5.27-3.11,7.35-4.57,3.11-7.48,3.11Zm-8.47,74.13v-66.19h17.07v66.19h-17.07Z"
              />
              <path
                className="cls-1"
                d="m763.64,165.05h-19.72l-14.3-20.12-14.43,20.12h-19.72l24.22-33.75-23.16-32.43h19.72l13.37,18.66,13.37-18.66h19.59l-23.17,32.3,24.23,33.89Z"
              />
              <path d="m96.81,90.92c-2.82,0-5.27-1.04-7.35-3.11-2.07-2.07-3.11-4.52-3.11-7.35s1.04-5.3,3.11-7.41c2.07-2.12,4.52-3.18,7.35-3.18s5.41,1.06,7.48,3.18c2.07,2.12,3.11,4.59,3.11,7.41s-1.04,5.27-3.11,7.35c-2.07,2.07-4.57,3.11-7.48,3.11Zm-8.47,74.13v-66.19h17.08v66.19h-17.08Z" />
            </svg>
          </Link>

          <div className="mx-auto w-full max-w-[600px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-4 text-2xl font-bold text-[#3C4257]">
                Create your free account
              </h1>

              <div className="flex flex-col md:flex-row md:gap-6">
                <Controller
                  control={control}
                  name="firstname"
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <FormItem className="mt-3 w-full">
                      <FormLabel
                        htmlFor="firstname"
                        error={!!fieldState.error}
                        className=" mb-3 text-[#3C4257] "
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
                    <FormItem className="mt-3 w-full">
                      <FormLabel
                        htmlFor="lastname"
                        error={!!fieldState.error}
                        className=" mb-3 text-[#3C4257]"
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
              </div>

              <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormItem className="mt-3">
                    <FormLabel
                      htmlFor="email"
                      error={!!fieldState.error}
                      className=" mb-3 text-[#3C4257]"
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
                  <FormItem className="mt-3">
                    <FormLabel
                      htmlFor="password"
                      error={!!fieldState.error}
                      className=" mb-3 text-[#3C4257] "
                    >
                      Password
                    </FormLabel>

                    <PasswordInput
                      {...field}
                      id="password"
                      className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white "
                      classNames={{
                        showButton:
                          " dark:text-black dark:hover:bg-gray-100 dark:hover:text-black ",
                      }}
                      placeholder="******"
                    />

                    <FormMessage message={fieldState.error?.message} />
                  </FormItem>
                )}
              />

              <div className="my-3 flex items-center gap-2">
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
                className="h-fit w-full cursor-pointer rounded-md bg-black py-4 text-white/70"
              >
                {isSubmitting ? (
                  <PiSpinnerGap className=" size-5 animate-spin " />
                ) : (
                  "Continue"
                )}
              </Button>
            </form>

            <div className="relative">
              <p className="mx-auto w-fit bg-white p-4">or</p>
              <div className="absolute left-0 right-0 top-1/2 -z-[1] h-[0.5px] translate-y-1/2 bg-black/20"></div>
            </div>

            <button className="mb-5 flex w-full items-center justify-center gap-3 rounded-md border border-black px-4 py-3 hover:bg-black hover:text-white/70 focus:bg-black focus:text-white/70">
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16333 6.67969V9.84116H12.5567C12.3638 10.8579 11.7849 11.7188 10.9166 12.2976L13.566 14.3533C15.1096 12.9285 16.0002 10.8357 16.0002 8.34956C16.0002 7.77071 15.9482 7.21406 15.8517 6.67978L8.16333 6.67969Z"
                  fill="#4285F4"
                />
                <path
                  d="M3.58837 9.71875L2.99083 10.1762L0.875732 11.8237C2.21898 14.4879 4.97208 16.3284 8.16321 16.3284C10.3673 16.3284 12.2151 15.6011 13.5659 14.3543L10.9165 12.2986C10.1892 12.7884 9.26151 13.0853 8.16321 13.0853C6.04073 13.0853 4.23741 11.653 3.59171 9.72346L3.58837 9.71875Z"
                  fill="#34A853"
                />
                <path
                  d="M0.875649 4.50391C0.319082 5.60221 0 6.84158 0 8.16255C0 9.48352 0.319082 10.7229 0.875649 11.8212C0.875649 11.8286 3.59189 9.71355 3.59189 9.71355C3.42862 9.22375 3.33212 8.70429 3.33212 8.16247C3.33212 7.62064 3.42862 7.10118 3.59189 6.61138L0.875649 4.50391Z"
                  fill="#FBBC05"
                />
                <path
                  d="M8.16337 3.25052C9.36564 3.25052 10.4343 3.6661 11.2877 4.46761L13.6254 2.12994C12.2079 0.808971 10.3675 0 8.16337 0C4.97224 0 2.21898 1.83306 0.875732 4.50473L3.59189 6.61238C4.2375 4.68282 6.0409 3.25052 8.16337 3.25052Z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-medium">Sign up with Google</span>
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="bg-hover-focus rounded-md px-2 py-1 text-primary-base"
              >
                Login
              </Link>
            </p>
          </div>

          <p className="mx-auto w-fit text-[#697386]">
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

        <div className="bg-[url('/images/signup.jpg')] bg-cover bg-left bg-no-repeat md:relative">
          <Link
            href="/"
            className="absolute right-5 top-5 inline-block rounded-full bg-primary-base p-2"
          >
            <FiArrowLeft className="size-6 text-white md:size-10" />
          </Link>
        </div>
      </main>
    </>
  );
}
