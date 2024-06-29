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
import useTheme from "@/store/theme/useTheme";

export default function SignupScreen() {
  const router = useRouter();
  const authRepo = useAuthRepo();
  const { theme } = useTheme();
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

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <main className="mx-auto min-h-screen grid-cols-[1fr,1fr] max-md:pb-20 md:grid">
        <div className="flex w-full flex-col justify-between gap-10 px-14 py-24 max-md:h-screen">
          <Link href="/">
            <svg
              width={850}
              height={260}
              viewBox="0 0 850 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-auto self-start md:h-24"
            >
              <g clipPath="url(#clip0_725_16)">
                <path d="M850 0H0V260H850V0Z" className="fill-white dark:fill-black" />
                <path
                  d="M159.23 97.0122C166.46 97.0122 172.44 99.4422 177.17 104.292C181.89 109.142 184.25 115.852 184.25 124.412V165.052H167.18V126.532C167.18 122.122 165.99 118.742 163.61 116.402C161.23 114.072 158.05 112.892 154.08 112.892C149.67 112.892 146.14 114.262 143.49 116.992C140.84 119.722 139.52 123.832 139.52 129.302V165.042H122.44V98.8522H139.52V106.262C143.67 100.092 150.24 96.9922 159.24 96.9922L159.23 97.0122Z"
                  className="fill-black dark:fill-white"
                />
                <path
                  d="M241.16 98.8633H259.96L234.81 165.053H215.35L190.2 98.8633H209L225.02 145.193L241.17 98.8633H241.16Z"
                  className="fill-black dark:fill-white"
                />
                <path
                  d="M279.95 138.972C282.24 147.272 288.46 151.412 298.61 151.412C305.14 151.412 310.08 149.212 313.44 144.792L327.21 152.732C320.68 162.172 311.06 166.892 298.35 166.892C287.41 166.892 278.63 163.582 272.01 156.962C265.39 150.342 262.08 142.002 262.08 131.942C262.08 121.882 265.34 113.652 271.88 106.992C278.41 100.332 286.79 96.9922 297.03 96.9922C306.74 96.9922 314.75 100.342 321.06 107.052C327.37 113.762 330.52 122.052 330.52 131.932C330.52 134.142 330.3 136.482 329.86 138.952H279.96L279.95 138.972ZM279.68 125.732H313.43C312.46 121.232 310.45 117.882 307.41 115.672C304.37 113.472 300.9 112.362 297.02 112.362C292.43 112.362 288.64 113.532 285.64 115.872C282.64 118.212 280.65 121.502 279.68 125.732Z"
                  className="fill-black dark:fill-white"
                />
                <path
                  d="M355.53 117.662C355.53 119.432 356.7 120.862 359.04 121.962C361.38 123.062 364.22 124.032 367.58 124.872C370.93 125.712 374.29 126.772 377.64 128.052C380.99 129.332 383.84 131.472 386.18 134.472C388.52 137.472 389.69 141.222 389.69 145.722C389.69 152.522 387.15 157.752 382.08 161.402C377 165.062 370.67 166.892 363.08 166.892C349.49 166.892 340.22 161.642 335.28 151.142L350.11 142.802C352.05 148.542 356.38 151.402 363.08 151.402C369.17 151.402 372.21 149.502 372.21 145.712C372.21 143.952 371.04 142.512 368.7 141.412C366.36 140.312 363.51 139.322 360.16 138.432C356.81 137.552 353.45 136.442 350.1 135.122C346.75 133.802 343.9 131.702 341.56 128.832C339.22 125.962 338.05 122.372 338.05 118.042C338.05 111.512 340.45 106.372 345.26 102.622C350.07 98.8722 356.05 96.9922 363.2 96.9922C368.58 96.9922 373.48 98.2022 377.89 100.632C382.3 103.062 385.79 106.522 388.35 111.022L373.79 118.962C371.67 114.462 368.14 112.212 363.2 112.212C360.99 112.212 359.16 112.702 357.71 113.672C356.25 114.642 355.53 115.972 355.53 117.642V117.662Z"
                  className="fill-black dark:fill-white"
                />
                <path
                  d="M430.73 115.27H415.77V142.8C415.77 145.1 416.34 146.77 417.49 147.83C418.63 148.89 420.31 149.48 422.52 149.62C424.73 149.75 427.46 149.73 430.73 149.55V165.04C418.99 166.36 410.72 165.26 405.91 161.73C401.1 158.2 398.7 151.89 398.7 142.8V85.4803L415.78 80.3203V98.8503H430.74V115.26L430.73 115.27Z"
                  className="fill-black dark:fill-white"
                />
                <path
                  d="M483.67 128.191C484.08 129.381 484.25 130.661 484.25 131.941C484.25 133.221 484.08 134.531 483.67 135.721C483.44 136.561 483.15 137.411 482.68 138.131C481.49 140.431 479.63 142.231 477.39 143.451C476.63 143.891 475.79 144.241 474.92 144.501C473.73 144.821 472.51 144.991 471.17 144.991C469.83 144.991 468.61 144.821 467.45 144.501C466.58 144.241 465.79 143.891 464.98 143.451C462.74 142.231 460.88 140.431 459.66 138.131C459.28 137.401 458.93 136.561 458.67 135.721C458.32 134.531 458.12 133.281 458.12 131.941C458.12 130.601 458.32 129.381 458.67 128.191C458.93 127.351 459.28 126.531 459.66 125.751C460.88 123.511 462.74 121.681 464.98 120.431C465.79 120.021 466.58 119.671 467.45 119.411C468.61 119.091 469.86 118.891 471.17 118.891C472.48 118.891 473.73 119.091 474.92 119.411C475.79 119.671 476.64 120.021 477.39 120.431C479.63 121.681 481.49 123.511 482.68 125.751C483.15 126.541 483.44 127.351 483.67 128.191Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M491.09 98.87V106.66C485.97 100.23 478.79 97 469.51 97C460.23 97 453.11 100.37 446.82 107.12C440.51 113.87 437.34 122.16 437.34 131.96C437.34 141.76 440.51 150.02 446.82 156.77C453.1 163.52 460.69 166.89 469.51 166.89C478.79 166.89 485.97 163.66 491.09 157.23V165.02H508.16V98.85H491.09V98.87ZM495.66 136.86H492.14C491.56 139.16 490.69 141.31 489.46 143.23L491.99 145.73L485.01 152.71L482.51 150.21C480.59 151.4 478.38 152.33 476.14 152.83V156.41H466.31V152.83C464.01 152.28 461.86 151.4 459.94 150.21L457.38 152.71L450.43 145.73L451.13 145L452.96 143.23C451.71 141.28 450.84 139.16 450.34 136.86H446.73V127H450.34C450.83 124.73 451.71 122.58 452.96 120.66L450.43 118.1L457.38 111.15L459.94 113.65C461.86 112.43 464.01 111.56 466.31 111.06V107.51H476.14V111.06C478.38 111.55 480.59 112.43 482.51 113.65L483.47 112.69L485.01 111.15L491.99 118.1L490.36 119.79L489.46 120.63C490.57 122.4 491.47 124.41 491.99 126.56C492.05 126.68 492.11 126.85 492.14 127H495.66V136.86Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M523.65 165.052V68.4219H540.73V165.052H523.65Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M599.5 98.8616H617.77L593.68 165.052C590.24 174.582 585.67 181.482 579.98 185.762C574.29 190.042 567.21 191.962 558.74 191.522V175.632C563.33 175.722 566.97 174.752 569.66 172.722C572.35 170.692 574.49 167.432 576.08 162.922L548.94 98.8516H567.6L584.81 143.332L599.5 98.8516V98.8616Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M657.88 115.27H642.92V142.8C642.92 145.1 643.49 146.77 644.64 147.83C645.78 148.89 647.46 149.48 649.67 149.62C651.87 149.75 654.61 149.73 657.88 149.55V165.04C646.14 166.36 637.87 165.26 633.06 161.73C628.25 158.2 625.85 151.89 625.85 142.8V85.4803L642.93 80.3203V98.8503H657.89V115.26L657.88 115.27Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M678.4 90.9211C675.57 90.9211 673.13 89.8811 671.05 87.8111C668.97 85.7411 667.94 83.2911 667.94 80.4611C667.94 77.6311 668.97 75.1611 671.05 73.0511C673.12 70.9311 675.57 69.8711 678.4 69.8711C681.23 69.8711 683.81 70.9311 685.88 73.0511C687.95 75.1711 688.99 77.6411 688.99 80.4611C688.99 83.2811 687.95 85.7311 685.88 87.8111C683.81 89.8911 681.31 90.9211 678.4 90.9211ZM669.93 165.051V98.8611H687V165.051H669.93Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M763.64 165.051H743.92L729.62 144.931L715.19 165.051H695.47L719.69 131.301L696.53 98.8711H716.25L729.62 117.531L742.99 98.8711H762.58L739.41 131.171L763.64 165.061V165.051Z"
                  fill="#FB8B1E"
                />
                <path
                  d="M96.8101 90.9211C93.9901 90.9211 91.5401 89.8811 89.4601 87.8111C87.3901 85.7411 86.3501 83.2911 86.3501 80.4611C86.3501 77.6311 87.3901 75.1611 89.4601 73.0511C91.5301 70.9311 93.9801 69.8711 96.8101 69.8711C99.6401 69.8711 102.22 70.9311 104.29 73.0511C106.36 75.1711 107.4 77.6411 107.4 80.4611C107.4 83.2811 106.36 85.7311 104.29 87.8111C102.22 89.8811 99.7201 90.9211 96.8101 90.9211ZM88.3401 165.051V98.8611H105.42V165.051H88.3401Z"
                  className="fill-black dark:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_725_16">
                  <rect width={850} height={260} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <div className="mx-auto w-full max-w-[600px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-4 text-2xl font-bold">
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
                        className=" mb-3 "
                      >
                        Firstname
                      </FormLabel>

                      <Input
                        {...field}
                        id="firstname"
                        className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10 "
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
                        className=" mb-3"
                      >
                        Lastname
                      </FormLabel>

                      <Input
                        {...field}
                        id="lastname"
                        className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10 "
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
                      className=" mb-3"
                    >
                      Email
                    </FormLabel>

                    <Input
                      {...field}
                      id="email"
                      className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10 "
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
                      className=" mb-3 "
                    >
                      Password
                    </FormLabel>

                    <PasswordInput
                      {...field}
                      id="password"
                      className=" h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:!bg-white/10 "
                      classNames={{
                        showButton:
                          "dark:bg-transparent dark:text-white/80 dark:hover:bg-gray-100 dark:hover:text-black ",
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
                    name="terms-accepted"
                    id="terms-accepted"
                    className="size-5 appearance-none rounded bg-gray-200 dark:bg-white/10 checked:bg-primary-base"
                    checked={termsAccepted}
                    onChange={handleTermsAccepted}
                  />
                </div>

                <label htmlFor="terms-accepted" className="">
                  <span className=" text-sm ">
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
                className="h-fit w-full cursor-pointer rounded-md py-4"
              >
                {isSubmitting ? (
                  <PiSpinnerGap className=" size-5 animate-spin " />
                ) : (
                  "Continue"
                )}
              </Button>
            </form>

            <div className="relative">
              <p className="mx-auto w-fit bg-white dark:bg-black p-4">or</p>
              <div className="absolute left-0 right-0 top-1/2 -z-[1] h-[0.5px] translate-y-1/2 bg-black/20 dark:bg-white/20"></div>
            </div>

            <button className="group mb-5 flex w-full items-center justify-center gap-3 rounded-md border border-black px-4 py-3 hover:bg-black hover:text-white/70 focus:bg-black focus:text-white/70 dark:border-white/80 dark:hover:bg-white/80 dark:hover:text-black dark:focus:bg-white/80 dark:focus:text-black">
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
              <span className="text-sm font-medium group-hover:text-white group-focus:text-white dark:text-white dark:group-hover:text-black dark:group-focus:text-black">
                Sign up with Google
              </span>
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-hover-focus rounded-md px-2 py-1 text-primary-base"
              >
                Login
              </Link>
            </p>
          </div>

          <p className="mx-auto w-fit">
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
          <div className="top-0 bg-[url('/images/signup.jpg')] bg-cover bg-left bg-no-repeat md:sticky md:h-screen">
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
