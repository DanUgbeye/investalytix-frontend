"use client";

import { FormItem, FormLabel, FormMessage } from "@/components/form";
import InvestalytixLogoWordMark from "@/components/logo";
import { PasswordInput } from "@/components/password-input";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PAGES from "@/data/page-map";
import { useAuthRepo } from "@/modules/auth/repository";
import { SignupData } from "@/modules/auth/types";
import useTheme from "@/store/theme/useTheme";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";
import { ImCheckmark } from "react-icons/im";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const hearAboutUsOptions = [
  "Search Engine (Google, Bing, etc.)",
  "Social Media (Facebook, Twitter, Instagram, etc.)",
  "Word of Mouth",
  "Online Advertisement",
  "Television/Radio",
  "Newspaper/Magazine",
  "Email Campaign",
  "Attended Event or Conference",
  "Referral from a Friend or Colleague",
  "Blog or Online Article",
  "Podcast",
  "Other",
];

export default function SignupScreen() {
  const router = useRouter();
  const authRepo = useAuthRepo();
  const { theme } = useTheme();
  const [description, setDescription] = useState("");
  const {
    control,
    getValues,
    formState: { isSubmitting, isDirty },
    reset,
    handleSubmit,
  } = useForm<SignupData>({
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      hearAboutUs: "",
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email().toLowerCase(),
        password: z.string().min(8).max(64),
        firstname: z.string().min(2),
        lastname: z.string().min(2),
        hearAboutUs: z.string().min(2),
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
      let res = await authRepo.signup({
        ...data,
        hearAboutUs:
          data.hearAboutUs.toLowerCase() === "other"
            ? description
            : data.hearAboutUs,
      });
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
        <div className="mx-auto flex w-full max-w-[600px] flex-col gap-10 px-5 py-24 max-md:h-screen md:px-14">
          <Link href="/" className="w-fit">
            <InvestalytixLogoWordMark />
          </Link>

          <div className="w-full">
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
                        className="mb-3"
                      >
                        Firstname
                      </FormLabel>

                      <Input
                        {...field}
                        id="firstname"
                        className="h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10"
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
                        className="mb-3"
                      >
                        Lastname
                      </FormLabel>

                      <Input
                        {...field}
                        id="lastname"
                        className="h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10"
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
                      className="mb-3"
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

              {/* hear abour us */}
              <Controller
                control={control}
                name="hearAboutUs"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormItem className="mt-3">
                    <FormLabel
                      htmlFor="hearAboutUs"
                      error={!!fieldState.error}
                      className="mb-3"
                    >
                      How did you hear about us?
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pick an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {hearAboutUsOptions.map((option) => (
                          <SelectItem value={option} key={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage message={fieldState.error?.message} />
                  </FormItem>
                )}
              />

              {getValues("hearAboutUs").toLowerCase() === "other" && (
                <div className="space-y-2 mt-3">
                  <FormLabel htmlFor="description" className="mb-3">
                    Please specify
                  </FormLabel>
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:bg-white/10"
                    id="description"
                    type="string"
                    placeholder="how did you hear about us?"
                  />
                </div>
              )}

              <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <FormItem className="mt-3">
                    <FormLabel
                      htmlFor="password"
                      error={!!fieldState.error}
                      className="mb-3"
                    >
                      Password
                    </FormLabel>

                    <PasswordInput
                      {...field}
                      id="password"
                      className="h-fit w-full rounded border border-[#D9DCE1] bg-white p-[14px] focus:outline-none dark:!bg-white/10"
                      classNames={{
                        showButton:
                          "dark:text-main-gray-300 dark:hover:bg-main-gray-700 dark:hover:text-main-gray-300 ",
                      }}
                      placeholder="******"
                    />

                    <FormMessage message={fieldState.error?.message} />
                  </FormItem>
                )}
              />

              <div className="my-6 flex items-center gap-2">
                <div className="relative flex h-fit items-center">
                  <ImCheckmark className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-black" />

                  <input
                    type="checkbox"
                    name="terms-accepted"
                    id="terms-accepted"
                    className="size-5 appearance-none rounded-md border-2 checked:bg-primary-base"
                    checked={termsAccepted}
                    onChange={handleTermsAccepted}
                  />
                </div>

                <label htmlFor="terms-accepted" className="">
                  <span className="text-sm">
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
                  <Spinner className="size-5 animate-spin text-white" />
                ) : (
                  "Continue"
                )}
              </Button>
            </form>

            <div className="relative">
              <p className="mx-auto w-fit bg-white p-4 dark:bg-black">or</p>
              <div className="absolute left-0 right-0 top-1/2 -z-[1] h-[0.5px] translate-y-1/2 bg-black/20 dark:bg-white/20"></div>
            </div>

            <Button
              variant={"outline"}
              size={"lg"}
              className="group mb-5 flex w-full items-center justify-center gap-3 rounded-md border border-black px-4 py-3 hover:bg-black hover:text-white/70 focus:bg-black focus:text-white/70 dark:border-white/80 dark:hover:bg-white/80 dark:hover:text-black dark:focus:bg-white/80 dark:focus:text-black"
            >
              <FcGoogle className="size-5" />
              <span className="text-sm font-medium group-hover:text-white group-focus:text-white dark:text-white dark:group-hover:text-black dark:group-focus:text-black">
                Sign up with Google
              </span>
            </Button>

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
            <Image src="/images/auth.jpg" fill alt="" />
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
